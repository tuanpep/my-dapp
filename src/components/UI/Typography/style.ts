import { ColorPalettes, FontSize, FontWeight, IColors } from './../../../../theme';
import styled from 'styled-components';
import theme, { FontFamily } from '../../../../theme';

export type PropsTypographyStyle = {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  color?: ColorPalettes;
  align?: 'left' | 'center' | 'right';
};
export const TypographyStyle = styled.div<PropsTypographyStyle>`
  font-family: ${props => props.fontFamily || 'Space Grotesk'}, sans-serif;
  font-size: ${props => props.theme.font.size[props.fontSize] || 'md'};
  font-weight: ${props => props.theme.font.weight[props.fontWeight] || 'medium'};
  color: ${props =>
    props.color ? props.theme.colors.general[props.color] : theme.colors.general.white};
  text-align: ${props => props.align || 'left'};
  line-height: 1.25;
`;
