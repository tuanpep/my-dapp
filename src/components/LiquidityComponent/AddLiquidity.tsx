import Button from 'components/UI/Button';
import Divider from 'components/UI/Divider';
import BackIcon from 'components/UI/icons/BackIcon';
import PlusIcon from 'components/UI/icons/PlusIcon';
import QuestionIcon from 'components/UI/icons/QuestionIcon';
import Spacing from 'components/UI/Spacing';
import Typography from 'components/UI/Typography';
import React from 'react';
import SearchCurrencyModal from './SearchCurrencyModal';
import SelectCurrency from './SelectCurrency';
import { AddLiquidityRoot, AddLiquidityStyle, LiquidityBox, WalletInfoStyle } from './style';

type Props = {};

const AddLiquidity = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AddLiquidityRoot>
      <LiquidityBox>
        <AddLiquidityStyle>
          <Spacing all="sm">
            <div className="header">
              <BackIcon />
              <Typography type="h1" align="center">
                Add Liquidity
              </Typography>
              <QuestionIcon />
            </div>
          </Spacing>
          <Divider />

          <Spacing all="sm">
            <div className="content">
              <SelectCurrency openCurrencyModal={() => setIsOpen(true)} />
              <Spacing top="sm" bottom="sm">
                <div className="plus-icon">
                  <PlusIcon />
                </div>
              </Spacing>
              <SelectCurrency openCurrencyModal={() => setIsOpen(true)} />
            </div>
          </Spacing>

          <Spacing all="sm">
            <Button btn="light" color="dark" fullWidth>
              Invalid pair
            </Button>
          </Spacing>
        </AddLiquidityStyle>

        <SearchCurrencyModal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)} />
      </LiquidityBox>

      <WalletInfoStyle>
        <Spacing all="sm">
          <Typography type="body" align="left">
            LP TOKENS IN YOUR WALLET
          </Typography>
        </Spacing>
      </WalletInfoStyle>
    </AddLiquidityRoot>
  );
};

export default AddLiquidity;
