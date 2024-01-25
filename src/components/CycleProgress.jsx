import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledCycleProgress = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $left }) => $left}%;
    height: 100%;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
  }
`;

export default function CycleProgress() {
  const currentCycle = useSelector((store) => store.currentCycle);
  const currentTime = useSelector((store) => store.currentTime);
  const time = useSelector((store) => store.settings.time);

  const cycleTime = time[currentCycle] * 60;
  const progress = (currentTime / cycleTime) * 100;

  return <StyledCycleProgress $left={progress} />;
}
