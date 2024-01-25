import styled from "styled-components";
import { CiSettings } from "react-icons/ci";
import CycleProgress from "./CycleProgress";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 10px 0;
  gap: 20px;
  
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > div > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export default function Header({ onOpenSettings }) {
  return (
    <StyledHeader>
      <div>
        <div>
          <Logo src="/Logo.png" alt="logo" />
          <Heading>Focusize</Heading>
        </div>
        <button onClick={onOpenSettings}>
          <CiSettings size={30} color="white" />
        </button>
      </div>
      <CycleProgress />
    </StyledHeader>
  );
}
