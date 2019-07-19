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
// when using an array see below. spread in your state.array and spread in your action.payload
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      };

    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
