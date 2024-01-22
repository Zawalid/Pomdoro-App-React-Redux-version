import styled from "styled-components";

const StyledInput = styled.div`
  & label {
    font-size: 14px;
    color: #bbb;
    font-weight: bold;
  }
  & input {
    width: 100%;
    max-width: 150px;
    padding: 15px;
    border-radius: 5px;
    background-color: #eee;
    border: none;
    outline-color: transparent;
    margin-top: 8px;
  }
`;

export function InputNumber({ children, onChange, ...props }) {
  return (
    <StyledInput>
      <label>{children}</label>
      <input
        type="number"
        {...props}
        onChange={(e) => onChange(e.target.value)}
      />
    </StyledInput>
  );
}
