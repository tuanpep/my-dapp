import Spacing from 'components/UI/Spacing';
import Typography from 'components/UI/Typography';
import useAuth from 'lib/utils/useAuth';
import React from 'react';
import { PopoverButton, UserPopoverStyle } from './style';

type Props = {};

const UserPopover = ({}: Props) => {
  const { logout } = useAuth();
  return (
    <UserPopoverStyle>
      <PopoverButton onClick={logout}>
        <Typography type="button" color="white">
          Disconnect
        </Typography>
      </PopoverButton>
    </UserPopoverStyle>
  );
};

export default UserPopover;
