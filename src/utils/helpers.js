import { DEFAULT_OPTIONS } from "./constants";

export function getFormattedTime(time) {
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

export function changeTitle(time, title) {
  document.title = `${getFormattedTime(time * 60)} | ${title}`;
}

export function changeTheme(theme) {
  document.documentElement.style.setProperty("--theme", theme);
}

// Persist state to local storage
export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state.settings);
    localStorage.setItem("settings", serializedState);
  } catch {
    console.log("Error saving state");
  }
}
export function loadState() {
  try {
    const serializedState = localStorage.getItem("settings");
    if (serializedState === null) return undefined;
    const state = JSON.parse(serializedState);

    return {
      ...DEFAULT_OPTIONS,
      value: state.pomodoroTime * 60,
      settings: state,
    };
  } catch (err) {
    return undefined;
  }
}

