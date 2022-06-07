import Modal from 'components/UI/Modal';
import Spacing from 'components/UI/Spacing';
import Typography from 'components/UI/Typography';
import { connectors } from 'lib/connector';
import useAuth from 'lib/utils/useAuth';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { setPublicAddressAction } from 'store/user/action';
import { usePublicAddressManager } from 'store/user/hooks';
import theme from '../../../theme';
import { ConnectModalStyle, ModalTitle, WalletItems } from './style';

type Props = {
  toggleModal: () => void;
  isOpen: boolean;
};

const ConnectModal = ({ toggleModal, isOpen }: Props) => {
  const { login, account } = useAuth();
  const [publicAddress, setPublicAddress] = usePublicAddressManager();

  useEffect(() => {
    if (account) {
      setPublicAddress(account);
    }
  }, [account]);

  return (
    <Modal isOpen={isOpen} onDismiss={toggleModal}>
      <Spacing bottom="sm">
        <ModalTitle>
          <Typography type="h1">Connect wallet</Typography>
        </ModalTitle>
      </Spacing>
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
