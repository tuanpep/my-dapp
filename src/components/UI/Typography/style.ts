import { ColorPalettes, FontSize, FontWeight, IColors } from './../../../../theme';
import styled from 'styled-components';
import theme, { FontFamily } from '../../../../theme';

export type PropsTypographyStyle = {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  color?: string;
};
export const TypographyStyle = styled.div<PropsTypographyStyle>`
  font-family: ${props => props.fontFamily || 'Space Grotesk'}, sans-serif;
  font-size: ${props => props.theme.font.size[props.fontSize] || 'md'};
  font-weight: ${props => props.theme.font.weight[props.fontWeight] || 'normal'};
  color: ${props => props.color || theme.colors.general.dark};
`;
