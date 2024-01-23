import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledCycleCount = styled.div`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
`;

export default function CycleCount() {
  const currentCycle = useSelector((store) => store.currentCycle);
  const cyclesCount = useSelector((store) => store.cycleCount);

  return <StyledCycleCount>#{cyclesCount[currentCycle]}</StyledCycleCount>;
}
