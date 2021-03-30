/* Reducer */
import { filmsReducer } from "../reducer";

/* Actions */
import { filmsActions, filmActions } from "../actions";

/* Mocks */
import { filmsMock, filmMock } from "../__mocks__/mocks";

describe("Films reducer films actions", () => {
  test("should return initial state by default", () => {
    expect(filmsReducer(void 0, {})).toMatchSnapshot();
  });
  test("should handle start fetching action", () => {
    expect(
      filmsReducer(void 0, filmsActions.startFetching())
    ).toMatchSnapshot();
  });
  test("should handle stop fetching action", () => {
    expect(filmsReducer(void 0, filmsActions.stopFetching())).toMatchSnapshot();
  });
  test("should handle fill action", () => {
    expect(
      filmsReducer(void 0, filmsActions.fill(filmsMock))
    ).toMatchSnapshot();
  });
  test("should handle set fetching error message", () => {
    expect(
      filmsReducer(void 0, filmsActions.setFetchingError("We have an error"))
    ).toMatchSnapshot();
  });
});

describe("Films reducer film actions", () => {
  test("should return initial state by default", () => {
    expect(filmsReducer(void 0, {})).toMatchSnapshot();
  });
  test("should handle start fetching action", () => {
    expect(filmsReducer(void 0, filmActions.startFetching())).toMatchSnapshot();
  });
  test("should handle stop fetching action", () => {
    expect(filmsReducer(void 0, filmActions.stopFetching())).toMatchSnapshot();
  });
  test("should handle fill action", () => {
    expect(
      filmsReducer(void 0, filmActions.fillFilmProfile(filmMock))
    ).toMatchSnapshot();
  });
  test("should handle set fetching error message", () => {
    expect(
      filmsReducer(void 0, filmActions.setFetchingError("We have an error"))
    ).toMatchSnapshot();
  });
  test("should handle clear action", () => {
    expect(
      filmsReducer(void 0, filmActions.clearFilmProfile())
    ).toMatchSnapshot();
  });
});
