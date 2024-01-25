import styled from "styled-components";
import { changeCycle } from "../features/timer/timerSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  gap: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: -1px 6px 10px rgba(0, 0, 0, 0.3);
`;
const StyledTab = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  transition: 0.5s;

  &:focus-visible {
    outline: 1px solid white;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &.active {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &.active_dark {
    background-color: #fff;
    color: #000;
  }
  & h3 {
    font-size: 14px;
  }
`;

const tabs = [
  {
    label: "Pomodoro",
    value: "pomodoro",
  },
  {
    label: "Short Break",
    value: "shortBreak",
  },
  {
    label: "Long Break",
    value: "longBreak",
  },
];

export default function CyclesTabs() {
  const dispatch = useDispatch();
  const currentCycle = useSelector((store) => store.currentCycle);


  return (
    <StyledTabs>
      {tabs.map((tab) => {
        return (
          <StyledTab
            key={tab.value}
            className={currentCycle === tab.value ? "active" : ""}
            onClick={() => dispatch(changeCycle(tab.value))}
          >
            <h3>{tab.label}</h3>
          </StyledTab>
        );
      })}
    </StyledTabs>
  );
}
