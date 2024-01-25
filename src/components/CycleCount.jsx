import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledCycleCount = styled.p`
  color: #fff;
  font-weight: bold;
`;

export default function CycleCount() {
  const currentCycle = useSelector((store) => store.currentCycle);
  const cyclesCount = useSelector((store) => store.cycleCount);

  return <StyledCycleCount>#{cyclesCount[currentCycle]} Time {
    currentCycle === "pomodoro" ? "To Focus": "To Take A Break"
  }</StyledCycleCount>;
}
