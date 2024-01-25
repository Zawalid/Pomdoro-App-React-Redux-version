import Tippy from "@tippyjs/react";
import { FaAngleDown } from "react-icons/fa6";
import styled, { css } from "styled-components";

const StyledDropDown = styled.ul`
  width: 150px;
  background-color: white;
  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const StyledOption = styled.li`
  padding: 15px;
  list-style: none;
  color: var(--secondary-color);
  font-size: 14px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
  ${(props) =>
    props.$isCurrent &&
    css`
      background-color: whitesmoke;
    `}
`;
const StyledToggler = styled.button`
  width: 150px;
  padding: 15px;
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #eee;
`;

export function DropDown({ currentOption, options, onSelect }) {
  return (
    <Tippy
      content={
        <StyledDropDown>
          {options.map((option) => (
            <Option
              key={option}
              $isCurrent={currentOption === option}
              onClick={() => onSelect(option)}
            >
              {option}
            </Option>
          ))}
        </StyledDropDown>
      }
      interactive={true}
      arrow={false}
      theme="light"
      placement={"bottom-end"}
      trigger="click"
      onShow={(instance) => {
        instance.popper.addEventListener("click", () => instance.hide());
      }}
    >
      <StyledToggler type="button">
        {currentOption}
        <FaAngleDown />
      </StyledToggler>
    </Tippy>
  );
}

function Option({ children, onClick }) {
  return <StyledOption onClick={onClick}>{children}</StyledOption>;
}

