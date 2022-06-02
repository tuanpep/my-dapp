import React from 'react';
import { OverlayStyle } from './style';

export type OverlayProps = {
  transparency?: string;
  children: React.ReactNode;
};

const Overlay = ({ transparency, children }: OverlayProps) => {
  return <OverlayStyle transparency={transparency}>{children}</OverlayStyle>;
};

export default Overlay;
