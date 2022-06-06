import { Popover } from 'antd';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.general.dark};
  width: 100%;
  height: 84px;
  padding: 22px 112px 22px 112px;
  align-items: center;
  justify-content: space-between;
`;

export const PopoverCustom = styled(Popover)`
  &.ant-popover-inner-content {
    padding: 0 !important;
  }
`;
