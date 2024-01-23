export const DEFAULT_SETTINGS = {
  // Time
  time: {
    pomodoro: 0.1,
    shortBreak: 0.1,
    longBreak: 0.1,
  },
  longBreakInterval: 2,
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

export const DEFAULT_OPTIONS = {
  value: 25 * 60, // pomodoroTime * 60
  status: "idle", // idle | running | paused
  currentCycle: "pomodoro", // pomodoro | shortBreak | longBreak
  cycleCount: {
    pomodoro: 1,
    shortBreak: 1,
    longBreak: 1,
  },
  interval: null,
  settings: DEFAULT_SETTINGS,
};
