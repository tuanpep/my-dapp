import Divider from 'components/UI/Divider';
import BackIcon from 'components/UI/icons/BackIcon';
import PlusIcon from 'components/UI/icons/PlusIcon';
import QuestionIcon from 'components/UI/icons/QuestionIcon';
import Spacing from 'components/UI/Spacing';
import Typography from 'components/UI/Typography';
import React from 'react';
import SelectCurrency from './SelectCurrency';
import { AddLiquidityStyle, LiquidityBox } from './style';

type Props = {};

const AddLiquidity = (props: Props) => {
  return (
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
            <SelectCurrency />
            <Spacing top="sm" bottom="sm">
              <div className="plus-icon">
                <PlusIcon />
              </div>
            </Spacing>
            <SelectCurrency />
          </div>
        </Spacing>
      </AddLiquidityStyle>
    </LiquidityBox>
  );
};

export default AddLiquidity;
