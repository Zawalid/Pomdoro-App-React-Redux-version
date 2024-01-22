import styled from "styled-components";
import { CiSettings } from "react-icons/ci";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #fff;
  padding: 0 0 10px 0;

  & > div {
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
        <Logo src="/Logo.png" alt="logo" />
        <Heading>Focusize</Heading>
      </div>
      <button onClick={onOpenSettings}>
        <CiSettings size={30} color="white" />
      </button>
    </StyledHeader>
  );
}
