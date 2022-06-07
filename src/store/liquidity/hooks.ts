import { LiquiditySteps } from 'constants/enum';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';
import { AppDispatch } from './../index';
import { setLiquidityStepAction } from './action';

export const useLiquidityStep = () => {
  return useSelector((state: AppState) => state.liquidity.liquidityStep);
};

export function useLiquidityStepManager(): [
  LiquiditySteps,
  (LiquidityStep: LiquiditySteps) => void,
] {
  const dispatch = useDispatch<AppDispatch>();

  const liquidityStep = useLiquidityStep();

  const setLiquidityStep = useCallback(
    (liquidityStep: LiquiditySteps) => {
      dispatch(setLiquidityStepAction(liquidityStep));
    },
    [dispatch],
  );

  return [liquidityStep, setLiquidityStep];
}
