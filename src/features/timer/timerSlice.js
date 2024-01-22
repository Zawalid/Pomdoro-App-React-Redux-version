import { createSlice } from "@reduxjs/toolkit";
import { sounds } from "./sounds";

const initialState = {
  value: 25 * 60, // pomodoroTime * 60
  status: "idle", // idle | running | paused | completed
  currentCycle: "pomodoro", // pomodoro | shortBreak | longBreak
  cycleCount: {
    pomodoro: 0,
    shortBreak: 0,
    longBreak: 0,
  },
  interval: null,
};
const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state,action) => {
      state.status = "running";
      // state.value = action.payload * 60;

      // sounds["Fast Ticking"].loop = true;
      // sounds["Fast Ticking"].play();
    },
    pauseTimer: (state) => {
      state.status = "paused";
      clearInterval(state.interval);
      sounds["Fast Ticking"].pause();
    },
    changeCycle: (state, action) => {
      state.currentCycle = action.payload;
      state.status = "idle";
    },
    updateTime(state, action) {
      state.value = action.payload * 60;
    },
    decrementTime: (state, action) => {
      state.value > 0 ? state.value-- : (state.status = "completed"); // pauseTimer(state);
      state.interval = action.payload;
    },
  },
});

export const { pauseTimer, changeCycle, updateTime } = timerSlice.actions;

export default timerSlice.reducer;

export function startTimer() {
  return async function (dispatch) {
    dispatch({ type: "timer/startTimer" });
    const id = setInterval(
      () => dispatch({ type: "timer/decrementTime", payload: id }),
      1000
    );
  };
}
