import React from 'react';
import Overlay from '../Overlay';
import Typography from '../Typography';
import { ModalContentStyle, ModalStyle } from './style';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

export type ModalProps = {
  width?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ width, children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalStyle>
        <ModalContentStyle>
          <div className="title">
            <Typography type="h1" color="#fff">
              Connect Wallet
            </Typography>
          </div>
          <div className="close-btn" onClick={onClose}>
            <CloseOutline size={28} color={'#fff'} />
          </div>
          {children}
        </ModalContentStyle>
      </ModalStyle>
    </Overlay>
  );
};

export default Modal;
