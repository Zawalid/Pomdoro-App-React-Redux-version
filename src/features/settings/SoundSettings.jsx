import { FaVolumeHigh } from "react-icons/fa6";
import { InputNumber } from "../../components/ui/InputNumber";
import { DropDown } from "../../components/ui/DropDown";
import { FlexContainer } from "./Settings";
import { playSound } from "../../utils/sounds";
import { Controller } from "react-hook-form";

export function SoundSettings({ control, errors, setValue,getValues }) {

  const onSelect = (optionName, option) => (
    setValue(optionName, option, { shouldDirty: true }), playSound(option)
  );

  return (
    <div className="section">
      <h3>
        <FaVolumeHigh />z Sound
      </h3>
      <FlexContainer>
        <p>Alarm Sound</p>
        <DropDown
          currentOption={getValues("alarmSound")}
          options={["Beep", "Digital", "Kitchen"]}
          onSelect={(option) => onSelect("alarmSound", option)}
        />
        <Controller
          name="alarmSound"
          control={control}
          render={({ field }) => <input type="hidden" {...field} />}
        />
      </FlexContainer>
      <FlexContainer
        style={{
          justifyContent: "end",
        }}
      >
        <p>Repeat</p>
        <Controller
          name="alarmRepetitions"
          control={control}
          render={({ field }) => (
            <InputNumber {...field} error={errors?.alarmRepetitions?.message} />
          )}
          rules={{
            required: "Alarm repetitions is required",
            min: {
              value: 0,
              message: "Alarm repetitions must be at least 1",
            },
          }}
        />
      </FlexContainer>
      <FlexContainer>
        <p>Ticking Sound</p>
        <DropDown
          currentOption={ getValues("tickingSound")}
          options={["None", "Slow Ticking", "Fast Ticking"]}
          onSelect={(option) => onSelect("tickingSound", option)}
        />
          <Controller
          name="tickingSound"
          control={control}
          render={({ field }) => <input type="hidden" {...field} />}
        />
      </FlexContainer>
    </div>
  );
}
