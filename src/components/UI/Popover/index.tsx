import React from 'react';
import { PopoverStyle } from './style';

type Props = {
  isOpen: boolean;
};

const Popover = ({ isOpen }: Props) => {
  if (!isOpen) return null;

  return <PopoverStyle>Popover</PopoverStyle>;
};

export default Popover;
