import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_OPTIONS, DEFAULT_SETTINGS } from "../../utils/constants";
import { changeTheme, changeTitle } from "../../utils/helpers";
import {
  sounds,
  playAlarmSound,
  playTickingSound,
  stopSound,
} from "../../utils/sounds";

const timerSlice = createSlice({
  name: "timer",
  initialState: DEFAULT_OPTIONS,
  reducers: {
    // Timer
    startTimer(state) {
      state.status = "running";
      playTickingSound(sounds[state.settings.tickingSound]);
      stopSound(sounds[state.settings.alarmSound]);
      if(state.settings.darkModeWhenRunning) changeTheme('#000000')
    },
    pauseTimer(state) {
      clearInterval(state.interval);
      state.interval = null;
      state.status = "paused";
      stopSound(sounds[state.settings.tickingSound]);
      changeTheme(state.settings.colorTheme[state.currentCycle]);
    },
    completeCycle(state) {
      // Stop timer
      clearInterval(state.interval);
      state.interval = null;
      state.status = "idle";
      stopSound(sounds[state.settings.tickingSound]);

      // Update cycle count
      state.cycleCount[state.currentCycle]++;
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
    updateSettings(state, action) {
      state.settings = action.payload;
      changeTheme(state.settings.colorTheme[state.currentCycle]);
    },
    resetSettings(state) {
      state.settings = DEFAULT_SETTINGS;
    },
  },
});

export const { pauseTimer, changeCycle, updateSettings, resetSettings } =
  timerSlice.actions;

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
      settings: {
        longBreakInterval,
        autoStartBreaks,
        autoStartPomodoro,
        alarmSound,
        alarmRepetitions,
      },
    } = getState();

    // Decrement time
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
    // Play alarm sound
    playAlarmSound(sounds[alarmSound], alarmRepetitions) ;
    // Start timer (if auto start is enabled)
    if (
      (nextCycle === "pomodoro" && autoStartPomodoro) ||
      (["shortBreak", "longBreak"].includes(nextCycle) && autoStartBreaks)
    ) {
      const alarmTime = sounds[alarmSound].duration * (+alarmRepetitions + 1);
      setTimeout(() => dispatch(startTimer()), alarmTime * 1000);
    }
  };
}

function getNextCycle(currentCycle, pomodoroCount, longBreakInterval) {
  if (currentCycle === "pomodoro") {
    if (pomodoroCount % longBreakInterval === 0) return "longBreak";
    return "shortBreak";
  }
  return "pomodoro";
}
