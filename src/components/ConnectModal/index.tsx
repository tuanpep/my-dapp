import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import React from 'react';

type Props = {
  toggleModal: () => void;
  isOpen: boolean;
};

const ConnectModal = ({ toggleModal, isOpen }: Props) => {
  return (
    <Modal width="200px" isOpen={isOpen} onClose={toggleModal}>
      <Button btn="light" onClick={toggleModal}>
        Toggle
      </Button>
    </Modal>
  );
};

export default ConnectModal;
