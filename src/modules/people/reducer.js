/* Types */
import { types } from "./types";

const initialState = {
  /* People */
  data: [],
  count: 0,
  isFetching: false,
  error: null,

  /* Person */
  person: null,
  isFetchingPerson: false,
  personError: null,
};

export const peopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /* People */
    case types.START_FETCHING_PEOPLE:
      return {
        ...state,
        isFetching: true,
      };
    case types.STOP_FETCHING_PEOPLE:
      return {
        ...state,
        isFetching: false,
      };
    case types.SET_FETCHING_PEOPLE_ERROR:
      return {
        ...state,
        error: payload,
        data: [],
        count: 0,
      };
    case types.FILL_PEOPLE:
      return {
        ...state,
        data: payload.results.map((item, index) => ({
          ...item,
          id: index + 1,
        })),
        count: payload.count,
        error: null,
      };

    /* Person */
    case types.START_FETCHING_PERSON:
      return {
        ...state,
        isFetchingPerson: true,
      };
    case types.STOP_FETCHING_PERSON:
      return {
        ...state,
        isFetchingPerson: false,
      };
    case types.SET_FETCHING_PERSON_ERROR:
      return {
        ...state,
        personError: payload,
        person: null,
      };
    case types.FILL_PERSON_PROFILE:
      return {
        ...state,
        person: payload,
        personError: null,
      };
    case types.CLEAR_PERSON_PROFILE:
      return {
        ...state,
        person: null,
        personError: null,
      };

    default:
      return state;
  }
};
