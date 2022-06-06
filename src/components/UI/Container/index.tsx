import React from 'react';
import { ContainerStyle } from './style';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
