import { FaCheck, FaWandMagicSparkles } from "react-icons/fa6";
import { Modal } from "../../components/ui/Modal";
import styled, { css } from "styled-components";
import { ToggleSwitch } from "../../components/ui/ToggleSwitch";
import { FlexContainer } from "./Settings";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColorTheme, enableDarkModeWhenRunning } from "../timer/timerSlice";
import { changeTheme } from "../../utils/helpers";

const StyledThemeColor = styled.div`
  width: 90%;
  min-height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;

  @media screen and (min-width: 640px) {
    width: 400px;
  }

  & h2 {
    color: var(--primary-color);
    font-size: 17px !important;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding: 15px;
  }
  & div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
  }
`;

const Color = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  ${({ size }) =>
    size === "large" &&
    css`
      width: 50px;
      height: 50px;
      display: grid;
      place-content: center;
      color: white;
      font-size: 18px;
    `}
`;

export function ThemeSettings() {
  const [currentCycle, setCurrentCycle] = useState(null);
  const dispatch = useDispatch();
  const { colorTheme, darkModeWhenRunning } = useSelector(
    (store) => store.settings
  );

  return (
    <div className="section">
      <h3>
        <FaWandMagicSparkles />
        Theme
      </h3>
      <FlexContainer>
        <p>Color Themes</p>
        <FlexContainer className="colors">
          {Object.keys(colorTheme).map((cycle) => (
            <Color
              key={cycle}
              color={colorTheme[cycle]}
              onClick={() => setCurrentCycle(cycle)}
            />
          ))}
        </FlexContainer>
      </FlexContainer>
      <FlexContainer>
        <p>Dark Mode when running</p>
        <ToggleSwitch
          checked={darkModeWhenRunning}
          onChange={(value) => dispatch(enableDarkModeWhenRunning(value))}
        />
      </FlexContainer>
      <ThemeColor
        onClose={() => setCurrentCycle(null)}
        currentCycle={
          { cycle: currentCycle, color: colorTheme[currentCycle] } || {}
        }
      />
    </div>
  );
}

function ThemeColor({ onClose, currentCycle: { cycle, color: currentColor } }) {
  const currentCycle  = useSelector((store) => store.currentCycle);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={cycle !== null} onClose={onClose}>
      <StyledThemeColor>
        <h2>
          Pick a color for{" "}
          {cycle?.includes("Break") ? cycle?.replace("Break", " break") : cycle}
        </h2>
        <div>
          {themes.map((color) => (
            <Color
              key={color}
              color={color}
              size="large"
              onClick={() => {
                dispatch(changeColorTheme({ cycle: cycle, color: color }));
                currentCycle === cycle && changeTheme(color);
                onClose();
              }}
            >
              {currentColor === color && <FaCheck />}
            </Color>
          ))}
        </div>
      </StyledThemeColor>
    </Modal>
  );
}

const themes = [
  "#A7CEEB",
  "#FFDC5C",
  "#228B22",
  "#FF7F50",
  "#000080",
  "#C27BA0",
  "#36454F",
  "#40E0D0",
  "#A52A2A",
  "#007FFF",
  "#7DF9FF",
  "#551A8B",
];
