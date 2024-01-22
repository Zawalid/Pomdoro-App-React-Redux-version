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
