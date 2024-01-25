import { forwardRef } from "react";
import styled from "styled-components";
import { FaCircleInfo } from "react-icons/fa6";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const StyledInput = styled.div`
  & label {
    font-size: 14px;
    color: #bbb;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  & label svg {
    color: #ff3a3a;
    cursor: pointer;
    opacity: ${({ $error }) => ($error ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
  & input {
    width: 100%;
    max-width: 150px;
    padding: 15px;
    border-radius: 5px;
    background-color: #eee;
    border: 1px solid transparent;
    outline: none;
    margin-top: 8px;
    transition: border-color 0.3s ease-in-out;
    ${({ $error }) => $error && `border-color: #ff3a3a;`}
  }
`;

// export function InputNumber({ children, onChange, ...props }) {
//   return (
//     <StyledInput>
//       <label>{children}</label>
//       <input
//         type="number"
//         onChange={(e) => onChange(e.target.value)}
//         {...props}
//       />
//     </StyledInput>
//   );
// }

export const InputNumber = forwardRef(function InputNumber(
  { label, error, ...props },
  ref
) {
  return (
    <StyledInput $error={error}>
      <label>
        {label}

        <Tippy content={error} theme="error" trigger="click">
          <span>
            <FaCircleInfo />
          </span>
        </Tippy>
      </label>
      <input ref={ref} type="number" {...props} min={0} />
    </StyledInput>
  );
});
