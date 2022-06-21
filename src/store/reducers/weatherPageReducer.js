import initialState from '../initialStates/weatherPageInitialState';
import CHANGE_SEARCH_TEXT from '../actions/changeSearchTextAction';

const weatherPageReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_SEARCH_TEXT: {
      console.log(state);
      const newState = { ...state };
      newState.search = { ...state.search };
      newState.search.inputTexts = { ...state.search.inputTexts };
      newState.search.inputTexts[action.inputID] = action.text; // Задаёт объекту inputTexts свойство с именем поля (Поле которое изменяется в данный момент)
      return newState;
    }

    default:
      return state;
  }
}

export default weatherPageReducer;
