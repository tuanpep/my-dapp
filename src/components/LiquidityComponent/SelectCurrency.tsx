import { ChevronDown } from '@styled-icons/bootstrap/ChevronDown';
import Spacing from 'components/UI/Spacing';
import Typography from 'components/UI/Typography';
import React from 'react';
import theme from '../../../theme';
import { MaxButton, SelectCurrencyStyle } from './style';

type Props = {
  openCurrencyModal: () => void;
};

const SelectCurrency = ({ openCurrencyModal }: Props) => {
  return (
    <SelectCurrencyStyle>
      <div className="input-label">
        <Typography type="body-small">Input</Typography>
        <Typography type="body-small">Balance: 0</Typography>
      </div>

      <Spacing top="xs">
        <div className="input-crypto">
          <input type="text" className="amount-input" placeholder="0.0" />
          <div className="select-currency">
            <MaxButton>Max</MaxButton>
            <div className="select-btn" onClick={openCurrencyModal}>
              <Typography type="body-small">BNB</Typography>
              <ChevronDown size={16} color={theme.colors.general.white} />
            </div>
          </div>
        </div>
      </Spacing>
    </SelectCurrencyStyle>
  );
};

export default SelectCurrency;
