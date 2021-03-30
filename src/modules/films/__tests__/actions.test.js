/* Actions */
import { filmsActions, filmActions } from "../actions";

/* Mocks */
import { filmsMock, filmMock } from "../__mocks__/mocks";

describe("Films actions", () => {
  it("should start fetching", () => {
    expect(filmsActions.startFetching()).toMatchSnapshot();
  });
  it("should stop fetching", () => {
    expect(filmsActions.stopFetching()).toMatchSnapshot();
  });
  it("should fetch films", () => {
    expect(filmsActions.fetchAsync()).toMatchSnapshot();
  });
  it("should fill films", () => {
    expect(filmsActions.fill(filmsMock)).toMatchSnapshot();
  });
  it("should set fetching error", () => {
    expect(
      filmsActions.setFetchingError("We have an error !")
    ).toMatchSnapshot();
  });
});

describe("Film actions", () => {
  it("should start fetching", () => {
    expect(filmActions.startFetching()).toMatchSnapshot();
  });
  it("should stop fetching", () => {
    expect(filmActions.stopFetching()).toMatchSnapshot();
  });
  it("should fetch person", () => {
    expect(filmActions.fetchAsync()).toMatchSnapshot();
  });
  it("should fill person", () => {
    expect(filmActions.fillFilmProfile(filmMock)).toMatchSnapshot();
  });
  it("should set fetching error", () => {
    expect(
      filmActions.setFetchingError("We have an error !")
    ).toMatchSnapshot();
  });
  it("should clear film profile", () => {
    expect(filmActions.clearFilmProfile()).toMatchSnapshot();
  });
});
