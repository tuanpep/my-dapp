import { AddLiquidity } from 'components/LiquidityComponent';
import styled from 'styled-components';

export const AddLiquidityRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const LiquidityBox = styled.div`
  width: 384px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 32px;
  position: relative;
  margin-bottom: 6px;
  margin-top: 80px;
  svg {
    cursor: pointer;
  }
`;

export const LiquidityStyle = styled.div`
  .modal-icon {
    display: flex;
    gap: 10px;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .content-head {
    display: flex;
    justify-content: space-between;
  }

  .content-body {
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AddLiquidityStyle = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    .plus-icon {
      background-color: ${props => props.theme.colors.general.grey};
      padding: 8px;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin: 0 auto;

      svg {
        pointer-events: none;
      }
    }
  }
`;

export const MaxButton = styled.button`
  border: 1px solid ${props => props.theme.colors.general.yellow};
  border-radius: 12px;
  width: 53px;
  height: 28px;
  color: ${props => props.theme.colors.general.yellow};
  font-weight: 700;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  background: none;
  cursor: pointer;
`;

export const SelectCurrencyStyle = styled.div`
  background-color: ${props => props.theme.colors.general.grey};
  padding: 8px 10px;
  border-radius: 16px;

  .input-label {
    display: flex;
    justify-content: space-between;
  }

  .input-crypto {
    display: flex;
    justify-content: space-between;
    align-items: center;

    input.amount-input {
      outline: 0;
      border: 0;
      background: none;
      color: ${props => props.theme.colors.general.white};
    }

    .select-currency {
      width: 50%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .select-btn {
        display: flex;
        gap: 8px;
        cursor: pointer;
        padding: 8px;
        border-radius: 10px;

        &:hover {
          background-color: ${props => props.theme.colors.general.dark};
        }
      }
    }
  }
`;

export const WalletInfoStyle = styled.div`
  background-color: ${props => props.theme.colors.general.grey};
  border-radius: 32px;
  color: ${props => props.theme.colors.general.white};
`;
