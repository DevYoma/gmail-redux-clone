import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import yomaReducer from '../features/yomaSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    yoma: yomaReducer
  },
});


//step 1: changed the counter => mail
// step 2: rename counter slice to mailSlice