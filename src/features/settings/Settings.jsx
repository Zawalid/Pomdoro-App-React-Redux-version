import styled from "styled-components";
import { FaXmark,FaFloppyDisk  } from "react-icons/fa6";
import { RxReset } from "react-icons/rx";
import { Modal } from "../../components/ui/Modal";
import { TimerSettings } from "./TimerSettings";
import { SoundSettings } from "./SoundSettings";
import { ThemeSettings } from "./ThemeSettings";
import { useDispatch } from "react-redux";
import { resetSettings } from "../timer/timerSlice";

const StyledSettings = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  @media screen and (min-width: 640px) {
    width: 400px;
    height: 90%;
    border-radius: 10px;
  }

  & .scroll {
    overflow-y: auto;
    padding-inline: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & .section {
    padding-block: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & .section:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  & h2 {
    color: var(--primary-color);
    font-size: 22px;
  }
  & h3 {
    display: flex;
    font-size: 18px;
    gap: 4px;
    align-items: center;
    color: var(--tertiary-color);
  }
  & p {
    font-weight: bold;
    color: var(--secondary-color);
  }
`;
const StyledSettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
`;
const CloseButton = styled.button`
  font-size: 22px;
  color: var(--tertiary-color);
  cursor: pointer;
`;
const ResetButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  background-color: var(--primary-color);
  transition: background-color 0.3s ease-in-out;
  margin-inline: 20px;
  margin-top: 20px;
  &:hover {
    background-color: var(--secondary-color);
  }
  & svg {
    font-size: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Settings({ isOpen, onClose }) {
  const dispatch = useDispatch();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledSettings>
        <StyledSettingsHeader>
          <h2>Settings</h2>
          <CloseButton onClick={onClose}>
            <FaXmark />
          </CloseButton>
        </StyledSettingsHeader>
        <div className="scroll">
          <TimerSettings />
          <SoundSettings />
          <ThemeSettings />
        </div>
        <ResetButton onClick={() => dispatch(resetSettings())}>
          <RxReset />
          Reset To Defaults
        </ResetButton>
      </StyledSettings>
    </Modal>
  );
}
