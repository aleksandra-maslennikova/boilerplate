/* Api */
import { api } from "../../api";

/* Types */
import { types } from "./types";

export const filmsActions = Object.freeze({
  /* Sync */
  startFetching: () => {
    return {
      type: types.START_FETCHING_FILMS,
    };
  },
  stopFetching: () => {
    return {
      type: types.STOP_FETCHING_FILMS,
    };
  },
  fill: (payload) => {
    return {
      type: types.FILL_FILMS,
      payload,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.SET_FETCHING_FILMS_ERROR,
      error: true,
      payload: error,
    };
  },

  /* Async */
  fetchAsync: (page) => async (dispatch) => {
    dispatch(filmsActions.startFetching());

    const response = await api.films.fetch(page);

    if (response.status === 200) {
      const { results, count } = await response.json();

      dispatch(filmsActions.fill({ results, count }));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(filmsActions.setFetchingError(error));
    }
    dispatch(filmsActions.stopFetching());
  },
});

export const filmActions = Object.freeze({
  /* Sync */
  startFetching: () => {
    return {
      type: types.START_FETCHING_FILM,
    };
  },
  stopFetching: () => {
    return {
      type: types.STOP_FETCHING_FILM,
    };
  },
  fillFilmProfile: (payload) => {
    return {
      type: types.FILL_FILM_PROFILE,
      payload,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.SET_FETCHING_FILM_ERROR,
      error: true,
      payload: error,
    };
  },
  clearFilmProfile: () => {
    return {
      type: types.CLEAR_FILM_PROFILE,
    };
  },

  /* Async */
  fetchAsync: (id) => async (dispatch) => {
    dispatch(filmActions.startFetching());

    const response = await api.film.fetch(id);

    if (response.status === 200) {
      const results = await response.json();

      dispatch(filmActions.fillFilmProfile(results));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(filmActions.setFetchingError(error));
    }
    dispatch(filmActions.stopFetching());
  },
});
