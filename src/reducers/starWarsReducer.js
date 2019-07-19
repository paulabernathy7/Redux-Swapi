import {
  FETCH_CHARACTERS,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

//after writing out each case go to mapstate to props and add the new state
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        fetching: true
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
