import { configureStore } from '@reduxjs/toolkit';
import application from './application/reducer';
import user from './user/reducer';
import liquidity from './liquidity/reducer';

const store = configureStore({
  reducer: {
    application,
    user,
    liquidity,
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
