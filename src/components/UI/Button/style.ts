import styled from 'styled-components';
import theme from '../../../../theme';

export type PropButtonStyle = {
  btn: string;
};

export const Root = styled.button<PropButtonStyle>`
  display: flex;
  background-color: ${props =>
    props.btn === 'primary' ? theme.colors.general.yellow : theme.colors.general.white};
  padding: 10px 29px;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  border-radius: 16px;
  cursor: pointer;
`;