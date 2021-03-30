/* Types */
import { types } from "./types";

const initialState = {
  /* Films */
  data: [],
  count: 0,
  isFetching: false,
  error: null,

  /* Film */
  film: null,
  isFetchingFilm: false,
  filmError: null,
};

export const filmsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /* Films */
    case types.START_FETCHING_FILMS:
      return {
        ...state,
        isFetching: true,
      };
    case types.STOP_FETCHING_FILMS:
      return {
        ...state,
        isFetching: false,
      };
    case types.SET_FETCHING_FILMS_ERROR:
      return {
        ...state,
        error: payload,
        data: [],
        count: 0,
      };
    case types.FILL_FILMS:
      return {
        ...state,
        data: payload.results.map((item, index) => ({
          ...item,
          id: index + 1,
        })),
        count: payload.count,
        error: null,
      };

    /* Film */
    case types.START_FETCHING_FILM:
      return {
        ...state,
        isFetchingFilm: true,
      };
    case types.STOP_FETCHING_FILM:
      return {
        ...state,
        isFetchingFilm: false,
      };
    case types.SET_FETCHING_FILM_ERROR:
      return {
        ...state,
        filmError: payload,
        film: null,
      };
    case types.FILL_FILM_PROFILE:
      return {
        ...state,
        film: payload,
        filmError: null,
      };
    case types.CLEAR_FILM_PROFILE:
      return {
        ...state,
        film: null,
        filmError: null,
      };

    default:
      return state;
  }
};
