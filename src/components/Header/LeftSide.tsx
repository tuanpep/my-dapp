import Image from 'next/image';
import React from 'react';

type Props = {};

const LeftSide = (props: Props) => {
  return (
    <>
      <div className="logo">
        <Image src="/LogoSVCoin.png" width={170} height={30} alt="Savvycom" />
      </div>
    </>
  );
};

export default LeftSide;
