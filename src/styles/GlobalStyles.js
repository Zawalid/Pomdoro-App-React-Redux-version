import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #000000;
  --secondary-color: #555555;
  --tertiary-color: #bbbbbb;
  --theme: #36454F;
  --progressBarWidth: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
    text-decoration: none;
}
li {
    list-style:     none;
}
button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
}

::-webkit-scrollbar {
    display: none;
}
body {
  background-color: var(--theme);
  height: 100vh;
  font-family: sans-serif;
  padding-block: 20px;
  position: relative;
  transition: 0.7s;
}
#root {
    width: 100%;
    height: 100%;
}
.tippy-box[data-theme="error"] {
  background-color: #ff3a3a;
  & .tippy-arrow{
    color: #ff3a3a;
  }
}
.tippy-box[data-theme="light"] {
  background-color: #ffffff;
}
`;

export default GlobalStyles;
