import { createAction } from '@reduxjs/toolkit';

export const setPublicAddressAction = createAction<string>('user/setPublicAddress');
