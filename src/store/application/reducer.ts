import { createReducer } from '@reduxjs/toolkit';
import { toggleConnectModal } from './actions';

export interface ApplicationState {
  isOpenConnectModal: boolean;
}

const initialState = {
  isOpenConnectModal: false,
};

export default createReducer(initialState, builder =>
  builder.addCase(toggleConnectModal, state => {
    state.isOpenConnectModal = !state.isOpenConnectModal;
  }),
);
