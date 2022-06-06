import Modal from 'components/UI/Modal';
import Typography from 'components/UI/Typography';
import { connectors } from 'lib/connector';
import useAuth from 'lib/utils/useAuth';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { setPublicAddressAction } from 'store/user/action';
import { usePublicAddressManager } from 'store/user/hooks';
import theme from '../../../theme';
import { ConnectModalStyle, WalletItems } from './style';

type Props = {
  toggleModal: () => void;
  isOpen: boolean;
};

const ConnectModal = ({ toggleModal, isOpen }: Props) => {
  const { login, logout, account } = useAuth();
  const [publicAddress, setPublicAddress] = usePublicAddressManager();

  useEffect(() => {
    if (account) {
      setPublicAddress(account);
    }
  }, [account]);

  const handleLogout = () => {
    logout();
  };

  return (
    <Modal isOpen={isOpen} onClose={toggleModal}>
      <ConnectModalStyle>
        <WalletItems onClick={() => login(connectors.injected)}>
          <Image src={'/icons/metamask.svg'} width={50} height={50} />
          <Typography type="body" color="white">
            Metamask
          </Typography>
        </WalletItems>

        <WalletItems onClick={() => login(connectors.walletConnect)}>
          <Image src={'/icons/walletconnect.svg'} width={50} height={50} />
          <Typography type="body" color="white">
            WalletConnect
          </Typography>
        </WalletItems>
      </ConnectModalStyle>
    </Modal>
  );
};

export default ConnectModal;
