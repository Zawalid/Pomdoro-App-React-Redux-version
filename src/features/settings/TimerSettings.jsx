import { FaRegClock } from "react-icons/fa6";
import { ToggleSwitch } from "../../components/ui/ToggleSwitch";
import { InputNumber } from "../../components/ui/InputNumber";
import { FlexContainer } from "./Settings";
import styled from "styled-components";
import { Controller } from "react-hook-form";

const Times = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(82px, 1fr));
  gap: 20px;
`;

export function TimerSettings({ control, errors }) {
  return (
    <div className="section">
      <h3>
        <FaRegClock />
        Timer
      </h3>
      <p>Time (Minutes)</p>
      <Times>
        <Controller
          name="time.pomodoro"
          control={control}
          render={({ field }) => (
            <InputNumber
              label="Pomodoro"
              {...field}
              error={errors.time?.pomodoro?.message}
            />
          )}
          rules={{
            required: "Pomodoro time is required",
            min: {
              value: 0.01,
              message: "Pomodoro time must be at least 1 second",
            },
          }}
        />
        <Controller
          name="time.shortBreak"
          control={control}
          render={({ field }) => (
            <InputNumber
              label="Short Break"
              {...field}
              error={errors.time?.shortBreak?.message}
            />
          )}
          rules={{
            required: "Short break time is required",
            min: {
              value: 0.01,
              message: "Short break time must be at least 1 second",
            },
          }}
        />
        <Controller
          name="time.longBreak"
          control={control}
          render={({ field }) => (
            <InputNumber
              label="Long Break"
              {...field}
              error={errors.time?.longBreak?.message}
            />
          )}
          rules={{
            required: "Long break time is required",
            min: {
              value: 0.01,
              message: "Long break time must be at least 1 second",
            },
          }}
        />
      </Times>
      <FlexContainer>
        <p>Auto Start Breaks</p>
        <Controller
          name="autoStartBreaks"
          control={control}
          render={({ field }) => (
            <ToggleSwitch checked={field.value} {...field} />
          )}
        />
      </FlexContainer>
      <FlexContainer>
        <p>Auto Start Pomodoros</p>
        <Controller
          name="autoStartPomodoro"
          control={control}
          render={({ field }) => (
            <ToggleSwitch checked={field.value} {...field} />
          )}
        />
      </FlexContainer>
      <FlexContainer>
        <p>Long Break Interval</p>
        <Controller
          name="longBreakInterval"
          control={control}
          render={({ field }) => <InputNumber {...field}
            error={errors.longBreakInterval?.message}
          />}
          rules={{
            required: "Long break interval is required",
            min: {
              value: 1,
              message: "Long break interval must be at least 1",
            },
          }}
        />
      </FlexContainer>
    </div>
  );
}
