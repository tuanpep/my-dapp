import { createReducer } from '@reduxjs/toolkit';
import { LiquiditySteps } from 'constants/enum';
import { setLiquidityStepAction } from './action';

export interface LiquidityState {
  liquidityStep: LiquiditySteps;
}

const initialState: LiquidityState = {
  liquidityStep: LiquiditySteps.Start,
};

export default createReducer(initialState, builder =>
  builder.addCase(setLiquidityStepAction, (state, action) => {
    state.liquidityStep = action.payload;
  }),
);
