import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { pauseTimer, startTimer } from "./timerSlice";
import { getFormattedTime } from "../../utils/helpers";

const StyledTimer = styled.div`
  width: 80%;
  height: 300px;
  display: grid;
  padding: 20px;
  place-content: center;
  background-color: ${({ $darkMode }) =>
    $darkMode ? "transparent" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 20px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
  position: relative;

  &.running {
    transform: scale(1);
    box-shadow: none;
  }
  & h1 {
    font-size: 100px;
    color: #fff;
    margin-bottom: 25px;
  }
  & button {
    border: none;
    color: #fff;
    background-color: transparent;
    font-size: 25px;
    letter-spacing: 15px;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
  }
`;

const StyledButton = styled.button`
  border-radius: 10px;
  text-transform: uppercase;
  &:focus-visible {
    outline: 1px solid white;
  }
`;

export default function Timer() {
  const dispatch = useDispatch();
  const currentTime = useSelector((store) => store.currentTime);
  const status = useSelector((store) => store.status);
  const currentCycle = useSelector((store) => store.currentCycle);
  const {
    time: { pomodoro: pomodoroTime },
    darkModeWhenRunning,
  } = useSelector((store) => store.settings);

  return (
    <StyledTimer
      className={status}
      $darkMode={status === "running" && darkModeWhenRunning}
    >
      <h1>
        {getFormattedTime(
          status === "idle" && currentCycle === "pomodoro"
            ? pomodoroTime * 60
            : currentTime
        )}
      </h1>
      <StyledButton
        onClick={() =>
          dispatch(status === "running" ? pauseTimer() : startTimer())
        }
      >
        {status === "running" ? "Pause" : "Start"}
      </StyledButton>
    </StyledTimer>
  );
}
