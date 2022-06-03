import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';
import { AppDispatch } from './../index';
import { setPublicAddressAction } from './action';

export const usePublicAddress = () => {
  return useSelector((state: AppState) => state.user.publicAddress);
};

export function usePublicAddressManager(): [string, (publicAddress: string) => void] {
  const dispatch = useDispatch<AppDispatch>();

  const publicAddress = usePublicAddress();

  const setPublicAddress = useCallback(
    (publicAddress: string) => {
      dispatch(setPublicAddressAction(publicAddress));
    },
    [dispatch],
  );

  return [publicAddress, setPublicAddress];
}
