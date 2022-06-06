import ConnectModal from 'components/ConnectModal';
import Button from 'components/UI/Button';
import UserPopover from 'components/UserPopover';
import useAccountEllipsis from 'lib/utils/accountEllipsis';
import React, { useEffect } from 'react';
import { useConnectModalOpen, useConnectModalToggle } from 'store/application/hooks';
import { usePublicAddress } from 'store/user/hooks';
import { PopoverCustom } from './style';

type Props = {};

const RightSide = (props: Props) => {
  const [isOpenPopover, setOpenPopover] = React.useState(false);

  const isOpen = useConnectModalOpen();
  const toggleModal = useConnectModalToggle();
  const account = usePublicAddress();

  useEffect(() => {
    if (account) {
      toggleModal();
    }
  }, [account]);

  return (
    <>
      {account ? (
        <PopoverCustom
          placement="bottom"
          content={<UserPopover />}
          trigger="click"
          overlayInnerStyle={{ padding: '0 !important' }}
        >
          <Button btn="primary" onClick={() => setOpenPopover(!isOpenPopover)}>
            <>{useAccountEllipsis(account)}</>
          </Button>
        </PopoverCustom>
      ) : (
        <Button btn="primary" color="dark" onClick={toggleModal}>
          Connect Wallet
        </Button>
      )}

      <ConnectModal toggleModal={toggleModal} isOpen={isOpen} />
    </>
  );
};

export default RightSide;
