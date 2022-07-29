import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialStates/authPageInitialState';

const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {

  }
});

export const {
  changeInputText,
  clearInputTexts,
  changeErrorInputText,
  clearErrorInputTexts,
  changeFormValidityState,
  resetFormValidityState,
  loginUser,
  registerUser,
  resetAuthResult
} = authSlice.actions;

export default authSlice.reducer;
