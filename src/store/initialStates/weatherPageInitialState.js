const initialState = {
  search: {
    inputTexts: {},
    inputValidationErrors: {},
    isFormValid: false,
    searchResult: {
      isError: false,
      isSearchSuccess: false,
      message: ''
    },
    weatherCards: []
  }
}

export default initialState;
