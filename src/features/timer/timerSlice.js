import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_OPTIONS, DEFAULT_SETTINGS } from "../../utils/constants";
import { changeTheme, changeTitle } from "../../utils/helpers";
import {
  sounds,
  playAlarmSound,
  playTickingSound,
  stopTickingSound,
} from "../../utils/sounds";

const timerSlice = createSlice({
  name: "timer",
  initialState: DEFAULT_OPTIONS,
  reducers: {
    // Timer
    startTimer(state) {
      state.status = "running";
      playTickingSound(sounds[state.settings.tickingSound]);
    },
    pauseTimer(state) {
      clearInterval(state.interval);
      state.interval = null;
      state.status = "paused";
      stopTickingSound(sounds[state.settings.tickingSound]);
    },
    completeCycle(state) {
      // Stop timer
      clearInterval(state.interval);
      state.interval = null;
      state.status = "idle";
      stopTickingSound(sounds[state.settings.tickingSound]);

      // Update cycle count
      state.cycleCount[state.currentCycle]++;
      // Play alarm sound
      playAlarmSound(
        sounds[state.settings.alarmSound],
        state.settings.alarmRepetitions
      );
    },
    changeCycle(state, action) {
      state.currentCycle = action.payload;
      state.status = "idle";
      state.currentTime = state.settings.time[state.currentCycle] * 60;

      changeTheme(state.settings.colorTheme[state.currentCycle]);
      changeTitle(
        state.settings.time[state.currentCycle],
        state.currentCycle === "pomodoro" ? "Time to focus!" : "Take a break!"
      );
    },

    decrementTime(state, action) {
      state.currentTime--;
      state.interval = action.payload;
    },
    changeColorTheme(state, action) {
      state.settings.colorTheme[action.payload.cycle] = action.payload.color;
    },
    updateSettings(state, action) {
      state.settings = action.payload;
    },
    resetSettings(state) {
      state.settings = DEFAULT_SETTINGS;
    },
  },
});

export const {
  pauseTimer,
  changeCycle,
  changeColorTheme,
  updateSettings,
  resetSettings,
} = timerSlice.actions;

export default timerSlice.reducer;

export function startTimer() {
  return async function (dispatch) {
    dispatch({ type: "timer/startTimer" });
    const id = setInterval(() => dispatch(decrementTime(id)), 1000);
  };
}

function decrementTime(id) {
  return async function (dispatch, getState) {
    const {
      currentTime,
      currentCycle,
      cycleCount: { pomodoro: pomodoroCount },
      settings: { longBreakInterval },
    } = getState();
    if (currentTime > 0)
      return dispatch({ type: "timer/decrementTime", payload: id });

    // Complete Cycle
    dispatch({ type: "timer/completeCycle" });
    // Switch to next cycle
    const nextCycle = getNextCycle(
      currentCycle,
      pomodoroCount,
      longBreakInterval
    );
    dispatch({ type: "timer/changeCycle", payload: nextCycle });
    // Update cycle count
    // Play alarm sound
    // Start timer (if auto start is enabled)
  };
}

function getNextCycle(currentCycle, pomodoroCount, longBreakInterval) {
  if (currentCycle === "pomodoro") {
    if (pomodoroCount % longBreakInterval === 0) return "longBreak";
    return "shortBreak";
  }
  return "pomodoro";
}
