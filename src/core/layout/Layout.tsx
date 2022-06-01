import Footer from 'components/Footer';
import Header from 'components/Header';
import Seo from 'components/Seo';
import React from 'react';
import { Root } from './style';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Seo />
      <Header />

      <Root>{children}</Root>

      <Footer />
    </>
  );
};

export default Layout;
