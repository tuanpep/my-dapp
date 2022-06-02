import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Root } from './style';

type Props = {};

const Header = (props: Props) => {
  return (
    <Root>
      <LeftSide />
      <RightSide />
    </Root>
  );
};

export default Header;
