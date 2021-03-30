/* Api */
import { api } from "../../api";

/* Types */
import { types } from "./types";

export const peopleActions = Object.freeze({
  /* Sync */
  startFetching: () => {
    return {
      type: types.START_FETCHING_PEOPLE,
    };
  },
  stopFetching: () => {
    return {
      type: types.STOP_FETCHING_PEOPLE,
    };
  },
  fill: (payload) => {
    return {
      type: types.FILL_PEOPLE,
      payload,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.SET_FETCHING_PEOPLE_ERROR,
      error: true,
      payload: error,
    };
  },

  /* Async */
  fetchAsync: (page) => async (dispatch) => {
    dispatch(peopleActions.startFetching());

    const response = await api.people.fetch(page);

    if (response.status === 200) {
      const { results, count } = await response.json();

      dispatch(peopleActions.fill({ results, count }));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(peopleActions.setFetchingError(error));
    }
    dispatch(peopleActions.stopFetching());
  },
});

export const personActions = Object.freeze({
  /* Sync */
  startFetching: () => {
    return {
      type: types.START_FETCHING_PERSON,
    };
  },
  stopFetching: () => {
    return {
      type: types.STOP_FETCHING_PERSON,
    };
  },
  fillPersonProfile: (payload) => {
    return {
      type: types.FILL_PERSON_PROFILE,
      payload,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.SET_FETCHING_PERSON_ERROR,
      error: true,
      payload: error,
    };
  },
  clearPersonProfile: () => {
    return {
      type: types.CLEAR_PERSON_PROFILE,
    };
  },

  /* Async */
  fetchAsync: (id) => async (dispatch) => {
    dispatch(personActions.startFetching());

    const response = await api.person.fetch(id);

    if (response.status === 200) {
      const results = await response.json();

      dispatch(personActions.fillPersonProfile(results));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(personActions.setFetchingError(error));
    }
    dispatch(personActions.stopFetching());
  },
});
