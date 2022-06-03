import Typography from 'components/UI/Typography';
import React from 'react';
import theme from '../../../theme';
import { Container, WelcomeStyle } from './style';

type Props = {};

const Welcome = (props: Props) => {
  return (
    <WelcomeStyle>
      <Container>
        <Typography type="hero" color={theme.colors.general.white}>
          Win 200% per year with Savvycoin
        </Typography>
      </Container>
    </WelcomeStyle>
  );
};

export default Welcome;
