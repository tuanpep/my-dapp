import { OverlayProps } from './index';
import styled from 'styled-components';

export const OverlayStyle = styled.div<OverlayProps>`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${p => p.theme.zIndex.xl};
  background: rgba(8, 18, 28, ${p => (p.transparency ? p.transparency : '0.65')});
`;
