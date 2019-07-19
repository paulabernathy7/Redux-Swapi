// we'll need axios
import axios from "axios";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const getAPI = () => dispatch => {};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
