import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  z-index: auto;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  & > div {
    transition: scale 0.3s ease-in-out;
    scale: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  }
`;

export function Modal({ children, isOpen, onClose }) {
  const modal = useRef(null);

  useEffect(() => {
    const modalDiv = modal.current;
    const clickOutside = (e) => modalDiv && modalDiv === e.target && onClose();

    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [onClose]);

  return (
    <StyledModal ref={modal} $isOpen={isOpen}>
      {children}
    </StyledModal>
  );
}
