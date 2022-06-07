import Typography from 'components/UI/Typography';
import React from 'react';
import theme from '../../../theme';
import { Container, WelcomeStyle } from './style';

type Props = {};

const Welcome = (props: Props) => {
  return (
    <WelcomeStyle>
      <Container></Container>
    </WelcomeStyle>
  );
};

export default Welcome;
