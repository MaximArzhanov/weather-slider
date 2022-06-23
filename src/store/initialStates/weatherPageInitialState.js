const initialState = {
  search: {
    inputTexts: {},
    inputValidationErrors: {},
    isFormValid: false,
    searchResult: {
      isError: false,
      isRequestSuccessful: false,
      message: ''
    }
  },
  weatherCards: []
}

export default initialState;
