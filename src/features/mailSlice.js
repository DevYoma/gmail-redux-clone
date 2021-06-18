import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './mailAPI';


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'mail/fetchCount',
  async (amount) => {
    // const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    // this is where the states are
    sendMessageIsOpen: false,
    selectedMail: null
  },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    }, 
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    }
   
  },
});

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.mail.value)`

// format for selectors
// export const selectorName = (state) => state.SLICENAME.SLICE__VARIABLE
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectSelectedMail = (state) => state.mail.selectedMail;


export default mailSlice.reducer;
