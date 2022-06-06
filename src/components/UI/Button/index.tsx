import { ButtonTypes } from 'constants/types';
import React from 'react';
import { ColorPalettes } from '../../../../theme';
import Typography from '../Typography';
import { Root } from './style';

type Props = {
  btn: ButtonTypes;
  children: React.ReactNode;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
  color?: ColorPalettes;
  fullWidth?: boolean;
};

const Button = ({ btn, children, onClick, ref, color, fullWidth }: Props) => {
  return (
    <Root btn={btn} onClick={onClick} ref={ref} fullWidth={fullWidth}>
      <Typography type="button" color={color}>
        {children}
      </Typography>
    </Root>
  );
};

export default Button;
