import { ButtonTypes } from 'constants/types';
import React from 'react';
import Typography from '../Typography';
import { Root } from './style';

type Props = {
  btn: ButtonTypes;
  children: React.ReactNode;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
};

const Button = ({ btn, children, onClick, ref }: Props) => {
  return (
    <Root btn={btn} onClick={onClick} ref={ref}>
      <Typography type="button">{children}</Typography>
    </Root>
  );
};

export default Button;
