import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import Typography from 'components/UI/Typography';
import { connectors } from 'lib/connector';
import useAuth from 'lib/utils/useAuth';
import Image from 'next/image';
import React, { useEffect } from 'react';
import theme from '../../../theme';
import { ConnectModalStyle, WalletItems } from './style';

type Props = {
  toggleModal: () => void;
  isOpen: boolean;
};

const ConnectModal = ({ toggleModal, isOpen }: Props) => {
  const { login, logout, account } = useAuth();

  useEffect(() => {
    console.log('account', account);
  }, [account]);

  const handleLogout = () => {
    logout();
  };

  return (
    <Modal isOpen={isOpen} onClose={toggleModal}>
      {/* <Button btn="light" onClick={() => login(connectors.injected)}>
        Metamask
      </Button> */}
      <ConnectModalStyle>
        <WalletItems onClick={() => login(connectors.injected)}>
          <Image src={'/icons/metamask.svg'} width={50} height={50} />
          <Typography type="button" color={theme.colors.general.white}>
            Metamask
          </Typography>
        </WalletItems>

        <WalletItems>
          <Image src={'/icons/walletconnect.svg'} width={50} height={50} />
          <Typography type="button" color={theme.colors.general.white}>
            WalletConnect
          </Typography>
        </WalletItems>
      </ConnectModalStyle>
    </Modal>
  );
};

export default ConnectModal;
