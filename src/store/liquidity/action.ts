import { createAction } from '@reduxjs/toolkit';
import { LiquiditySteps } from 'constants/enum';

export const setLiquidityStepAction = createAction<LiquiditySteps>('liquidity/setLiquidityStep');
