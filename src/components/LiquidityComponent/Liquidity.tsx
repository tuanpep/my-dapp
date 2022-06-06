import Button from 'components/UI/Button';
import Divider from 'components/UI/Divider';
import HistoryIcon from 'components/UI/icons/HistoryIcon';
import QuestionIcon from 'components/UI/icons/QuestionIcon';
import SettingIcon from 'components/UI/icons/SettingIcon';
import Spacing from 'components/UI/Spacing';
import Typography from 'components/UI/Typography';
import React from 'react';
import { LiquidityStyle, LiquidityBox } from './style';

type Props = {};

const AddLiquidity = (props: Props) => {
  return (
    <LiquidityBox>
      <LiquidityStyle>
        <Spacing all="sm">
          <Typography type="h1" align="center">
            Liquidity
          </Typography>
          <Typography type="body-small" align="center" color="whiteTransparent">
            Add liquidity to receive LP tokens
          </Typography>

          <Spacing bottom="sm" top="sm">
            <Button btn="primary" color="dark" fullWidth>
              Add liquidity
            </Button>
          </Spacing>
        </Spacing>
        <div className="modal-icon">
          <SettingIcon />
          <HistoryIcon />
        </div>
        <Divider />

        <Spacing all="sm">
          <div className="content-head">
            <Typography type="body">Your Liquidity</Typography>
            <QuestionIcon />
          </div>

          <div className="content-body">
            <Typography type="body" color="whiteTransparent" align="center">
              No liquidity found
            </Typography>
          </div>

          <div className="content-footer">
            <Typography type="body-small" color="white">
              Don't see a pool you joined?
            </Typography>

            <Spacing top="xs">
              <Typography type="body-small" color="white">
                Or, if you staked your LP tokens in a farm, unstake them to see them here.
              </Typography>
            </Spacing>
          </div>
        </Spacing>
      </LiquidityStyle>
    </LiquidityBox>
  );
};

export default AddLiquidity;
