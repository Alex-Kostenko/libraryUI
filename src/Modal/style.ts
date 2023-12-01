import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CloseBtn } from "../Icons";

export const ModalContainer = styled(Box)<{ active: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;

  ${({ active }) =>
    active &&
    `
    pointer-events: all;
    opacity: 1;
  `}
`;

export const ModalContent = styled(Box)<{ active: boolean }>`
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s;
  transform: scale(0.5);
  width: 567px;
  padding: 32px;

  ${({ active }) =>
    active &&
    `
    transform: scale(1);
  `}
`;

export const ModalHead = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 32px;
`;
export const ModalTitle = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  color: #061a51;
  font-size: 20px;
  line-height: 120%;
`;
export const ModalIcon = styled(Box)`
  cursor: pointer;
  transition: all 0.3s;
  width: 24px;
  height: 24px;
  &:hover {
    transform: scale(1.1);
  }
`;
