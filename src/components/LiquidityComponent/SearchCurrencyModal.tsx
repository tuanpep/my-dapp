import Modal from 'components/UI/Modal';
import React from 'react';

type Props = {
  isOpen: boolean;
  toggleModal: () => void;
};

const SearchCurrencyModal = ({ isOpen, toggleModal }: Props) => {
  return (
    <Modal isOpen={isOpen} onDismiss={toggleModal}>
      search
    </Modal>
  );
};

export default SearchCurrencyModal;
