import { FaRegClock } from "react-icons/fa6";
import { ToggleSwitch } from "../../components/ui/ToggleSwitch";
import { InputNumber } from "../../components/ui/InputNumber";
import { FlexContainer } from "./Settings";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  changePomodoroTime,
  changeShortBreakTime,
  changeLongBreakTime,
  changeLongBreakInterval,
  enableAutoStartBreaks,
  enableAutoStartPomodoro,
} from "./settingsSlice";

const Times = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(82px, 1fr));
  gap: 20px;
`;

export function TimerSettings() {
  const {
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    longBreakInterval,
    autoStartBreaks,
    autoStartPomodoro,
  } = useSelector((store) => store.settings);

  const dispatch = useDispatch();

  return (
    <div className="section">
      <h3>
        <FaRegClock />
        Timer
      </h3>
      <p>Time (Minutes)</p>
      <Times>
        <InputNumber
          min="1"
          value={pomodoroTime}
          onChange={(value) => dispatch(changePomodoroTime(value))}
        >
          Pomodoro
        </InputNumber>
        <InputNumber
          min="0"
          value={shortBreakTime}
          onChange={(value) => dispatch(changeShortBreakTime(value))}
        >
          Short Break
        </InputNumber>
        <InputNumber
          min="0"
          value={longBreakTime}
          onChange={(value) => dispatch(changeLongBreakTime(value))}
        >
          Long Break
        </InputNumber>
      </Times>
      <FlexContainer>
        <p>Auto Start Breaks</p>
        <ToggleSwitch
          checked={autoStartBreaks}
          onChange={(value) => dispatch(enableAutoStartBreaks(value))}
        />
      </FlexContainer>
      <FlexContainer>
        <p>Auto Start Pomodoros</p>
        <ToggleSwitch
          checked={autoStartPomodoro}
          onChange={(value) => dispatch(enableAutoStartPomodoro(value))}
        />
      </FlexContainer>
      <FlexContainer>
        <p>Long Break Interval</p>
        <InputNumber
          min="0"
          value={longBreakInterval}
          onChange={(value) => dispatch(changeLongBreakInterval(value))}
        />
      </FlexContainer>
    </div>
  );
}
