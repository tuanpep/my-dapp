import ConnectModal from 'components/ConnectModal';
import Button from 'components/UI/Button';
import React from 'react';
import { useConnectModalOpen, useConnectModalToggle } from 'store/application/hooks';

type Props = {};

const RightSide = (props: Props) => {
  const isOpen = useConnectModalOpen();
  const toggleModal = useConnectModalToggle();
  return (
    <>
      <Button btn="primary" onClick={toggleModal}>
        Connect Wallet
      </Button>

      <ConnectModal toggleModal={toggleModal} isOpen={isOpen} />
    </>
  );
};

export default RightSide;
