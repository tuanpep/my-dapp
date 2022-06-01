import React from 'react';
import { Root } from './style';

type Props = {};

const Header = (props: Props) => {
  return (
    <Root>
      <div className="logo">
        <img src="/LogoSVCoin.png" alt="Savvycom" />
      </div>
    </Root>
  );
};

export default Header;
