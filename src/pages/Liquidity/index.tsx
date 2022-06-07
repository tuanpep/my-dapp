import { AddLiquidity, LiquidityComponent } from 'components/LiquidityComponent';
import Seo from 'components/Seo';
import Container from 'components/UI/Container';
import Layout from 'core/layout';
import React from 'react';

type Props = {};

const Liquidity = (props: Props) => {
  return (
    <Layout>
      <Seo title="Liquidity" />
      {/* <LiquidityComponent /> */}
      <Container>
        <AddLiquidity />
      </Container>
    </Layout>
  );
};

export default Liquidity;
