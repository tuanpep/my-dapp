import React from 'react';
import { DividerStyle } from './style';

export type DividerProps = {
  margin?: string;
};

const Divider = ({ margin }: DividerProps) => {
  return <DividerStyle margin={margin} />;
};

export default Divider;
