import styled from 'styled-components';

export const WelcomeStyle = styled.div`
  background-color: ${props => props.theme.colors.general.dark};
  min-height: calc(100vh - 84px);
`;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
`;
