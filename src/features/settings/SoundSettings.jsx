import { useDispatch, useSelector } from "react-redux";
import {
  changeAlarmSound,
  changeAlarmRepetitions,
  changeTickingSound,
} from "../timer/timerSlice";
import { FaVolumeHigh } from "react-icons/fa6";
import { InputNumber } from "../../components/ui/InputNumber";
import { DropDown } from "../../components/ui/DropDown";
import { FlexContainer } from "./Settings";
import { playSound } from "../../utils/sounds";

export function SoundSettings() {
  const { alarmSound, alarmRepetitions, tickingSound } = useSelector(
    (store) => store.settings
  );
  const dispatch = useDispatch();

  return (
    <div className="section">
      <h3>
        <FaVolumeHigh />
        Sound
      </h3>
      <FlexContainer>
        <p>Alarm Sound</p>
        <DropDown
          currentOption={alarmSound}
          options={["Beep", "Digital", "Kitchen"]}
          onSelect={(option) => {
            dispatch(changeAlarmSound(option));
            playSound(option);
          }}
        />
      </FlexContainer>
      <FlexContainer
        style={{
          justifyContent: "end",
        }}
      >
        <p>Repeat</p>
        <InputNumber
          min="0"
          value={alarmRepetitions}
          onChange={(value) => dispatch(changeAlarmRepetitions(value))}
        />
      </FlexContainer>
      <FlexContainer>
        <p>Ticking Sound</p>
        <DropDown
          currentOption={tickingSound}
          options={["None", "Slow Ticking", "Fast Ticking"]}
          onSelect={(option) => {
            dispatch(changeTickingSound(option));
            playSound(option);
          }}
        />
      </FlexContainer>
    </div>
  );
}
