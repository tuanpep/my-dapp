import styled from 'styled-components';

export const UserPopoverStyle = styled.div`
  width: 180px;
  background-color: ${props => props.theme.colors.general.grey};
  border-radius: 16px;
  overflow: hidden;
`;

export const PopoverButton = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 12px;
  &:hover {
    background-color: ${props => props.theme.colors.general.whiteTransparent};
  }
`;
