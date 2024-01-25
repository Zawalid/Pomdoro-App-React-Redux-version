import { forwardRef } from "react";
import styled from "styled-components";

const StyledSwitch = styled.div`
  & input {
    appearance: none;
    position: absolute;
  }
  & div {
    width: 50px;
    height: 25px;
    background-color: #ccc;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    transition: 0.3s;
  }
  & div::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px;
    background-color: white;
    border-radius: 50%;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }
  & input:checked + div {
    background-color: #9dd25c;
  }
  & input:checked + div::before {
    left: 28px;
  }
`;

export const ToggleSwitch = forwardRef(function ToggleSwitch({ ...props }, ref) {
  return (
    <StyledSwitch>
      <label>
        <input type="checkbox" {...props} ref={ref} />
        <div></div>
      </label>
    </StyledSwitch>
  );
});
