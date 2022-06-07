import { createReducer } from '@reduxjs/toolkit';
import { setPublicAddressAction } from './action';

export interface UserState {
  publicAddress: string;
}

const initialState: UserState = {
  publicAddress: '',
};

export default createReducer(initialState, builder =>
  builder.addCase(setPublicAddressAction, (state, action) => {
    state.publicAddress = action.payload;
  }),
);
