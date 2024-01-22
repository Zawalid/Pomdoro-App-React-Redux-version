import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  // Time
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  longBreakInterval: 4,
  //   Auto Start
  autoStartBreaks: true,
  autoStartPomodoro: false,
  // Sound
  alarmSound: "Digital", // Beep | Digital | Kitchen
  alarmRepetitions: 0,
  tickingSound: "None", // None | Slow Ticking | Fast Ticking
  // Theme
  darkModeWhenRunning: false,
  colorTheme: {
    pomodoro: "#36454F",
    shortBreak: "#228B22",
    longBreak: "#A52A2A",
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSlice,
  reducers: {
    changePomodoroTime: (state, action) => {
      state.pomodoroTime = action.payload;
    },
    changeShortBreakTime: (state, action) => {
      state.shortBreakTime = action.payload;
    },
    changeLongBreakTime: (state, action) => {
      state.longBreakTime = action.payload;
    },
    changeLongBreakInterval: (state, action) => {
      state.longBreakInterval = action.payload;
    },
    enableAutoStartBreaks: (state, action) => {
      state.autoStartBreaks = action.payload;
    },
    enableAutoStartPomodoro: (state, action) => {
      state.autoStartPomodoro = action.payload;
    },
    changeAlarmSound: (state, action) => {
      state.alarmSound = action.payload;
    },
    changeAlarmRepetitions: (state, action) => {
      state.alarmRepetitions = action.payload;
    },
    changeTickingSound: (state, action) => {
      state.tickingSound = action.payload;
    },
    enableDarkModeWhenRunning: (state, action) => {
      state.darkModeWhenRunning = action.payload;
    },
    changeColorTheme: (state, action) => {
      state.colorTheme[action.payload.cycle] = action.payload.color;
    },

    resetSettings: () => initialSlice,
  },
});

export const {
  changePomodoroTime,
  changeShortBreakTime,
  changeLongBreakTime,
  changeLongBreakInterval,
  enableAutoStartBreaks,
  enableAutoStartPomodoro,
  changeAlarmSound,
  changeAlarmRepetitions,
  changeTickingSound,
  enableDarkModeWhenRunning,
  changeColorTheme,
  resetSettings,
} = settingsSlice.actions;
export default settingsSlice.reducer;
