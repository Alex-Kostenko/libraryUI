import React, { FC } from "react";
import { CloseBtn } from "../Icons";
import {
  ModalContainer,
  ModalContent,
  ModalHead,
  ModalIcon,
  ModalTitle,
} from "./style";

export interface ModalProps {
  children: any;
  active: boolean;
  onClose: () => void;
  onClick: () => void;
  modalTitle: string;
}

const Modal: FC<ModalProps> = ({
  active,
  onClose,
  onClick,
  children,
  modalTitle,
}) => {
  return (
    <ModalContainer active={active} onClick={onClose}>
      <ModalContent active={active} onClick={(e) => e.stopPropagation()}>
        <ModalHead>
          <ModalTitle>{modalTitle}</ModalTitle>
          <ModalIcon onClick={onClick}>
            <CloseBtn />
          </ModalIcon>
        </ModalHead>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export { Modal };
