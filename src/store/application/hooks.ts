import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';
import { toggleConnectModal } from './actions';

export function useConnectModalOpen(): boolean {
  return useSelector((state: AppState) => state.application.isOpenConnectModal);
}

export function useConnectModalToggle(): () => void {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(toggleConnectModal()), [dispatch]);
}
