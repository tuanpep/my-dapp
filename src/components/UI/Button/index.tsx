import { ButtonTypes } from 'constants/types';
import React from 'react';
import Typography from '../Typography';
import { Root } from './style';

type Props = {
  btn: ButtonTypes;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ btn, children, onClick }: Props) => {
  return (
    <Root btn={btn} onClick={onClick}>
      <Typography type="button">{children}</Typography>
    </Root>
  );
};

export default Button;
