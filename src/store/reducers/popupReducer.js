import initialState from '../initialStates/popupInitialState';
import {
  CLOSE_POPUP,
  OPEN_POPUP
} from "../actions/actions";

const popupReducer = (state = initialState, action) => {

  switch (action.type) {

    case OPEN_POPUP: {
      return { ...state, isPopupOpen: true}
    }

    case CLOSE_POPUP: {
      return { ...state, isPopupOpen: false }
    }

    default:
      return state;
  }
}

export default popupReducer;
