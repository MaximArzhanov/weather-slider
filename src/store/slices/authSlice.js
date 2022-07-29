import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialStates/authPageInitialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    changeInputText(state, action) { // Задаёт объекту inputTexts свойство с именем поля (Поле которое изменяется в данный момент)
      state.inputTexts[action.payload.inputID] = action.payload.value;
    },
    clearInputTexts(state, action) {
      state.inputTexts = {};
    },
    changeErrorInputText(state, action) { // Задаёт объекту inputValidationErrors свойство с именем поля (Поле которое изменяется в данный момент)
      state.inputValidationErrors[action.payload.inputID] = action.payload.errorText;
    },
    clearErrorInputTexts(state, action) { //
      state.inputValidationErrors = {};
    },
    changeFormValidityState(state, action) {
      state.isFormValid = action.payload.validationFormResult;
    },
    resetFormValidityState(state, action) {
      state.isFormValid = false;
    },
    loginUser(state, action) {
      state.authResult.isError = action.payload.result.isError;
      state.authResult.isRequestSuccessful = action.payload.result.isRequestSuccessful;
      state.authResult.message = action.payload.result.message;
    },
    registerUser(state, action) {
      state.authResult.isError = action.payload.result.isError;
      state.authResult.isRequestSuccessful = action.payload.result.isRequestSuccessful;
      state.authResult.message = action.payload.result.message;
    },
    resetAuthResult(state, action) {
      state.authResult.isError = false;
      state.authResult.isRequestSuccessful = false;
      state.authResult.message = '';
    }
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
