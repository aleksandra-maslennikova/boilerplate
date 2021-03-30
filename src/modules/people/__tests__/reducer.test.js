/* Reducer */
import { peopleReducer } from "../reducer";

/* Actions */
import { peopleActions, personActions } from "../actions";

/* Mocks */
import { peopleMock, personMock } from "../__mocks__/mocks";

describe("People reducer people actions", () => {
  test("should return initial state by default", () => {
    expect(peopleReducer(void 0, {})).toMatchSnapshot();
  });
  test("should handle start fetching action", () => {
    expect(
      peopleReducer(void 0, peopleActions.startFetching())
    ).toMatchSnapshot();
  });
  test("should handle stop fetching action", () => {
    expect(
      peopleReducer(void 0, peopleActions.stopFetching())
    ).toMatchSnapshot();
  });
  test("should handle fill action", () => {
    expect(
      peopleReducer(void 0, peopleActions.fill(peopleMock))
    ).toMatchSnapshot();
  });
  test("should handle set fetching error message", () => {
    expect(
      peopleReducer(void 0, peopleActions.setFetchingError("We have an error"))
    ).toMatchSnapshot();
  });
});

describe("People reducer person actions", () => {
  test("should return initial state by default", () => {
    expect(peopleReducer(void 0, {})).toMatchSnapshot();
  });
  test("should handle start fetching action", () => {
    expect(
      peopleReducer(void 0, personActions.startFetching())
    ).toMatchSnapshot();
  });
  test("should handle stop fetching action", () => {
    expect(
      peopleReducer(void 0, personActions.stopFetching())
    ).toMatchSnapshot();
  });
  test("should handle fill action", () => {
    expect(
      peopleReducer(void 0, personActions.fillPersonProfile(personMock))
    ).toMatchSnapshot();
  });
  test("should handle set fetching error message", () => {
    expect(
      peopleReducer(void 0, personActions.setFetchingError("We have an error"))
    ).toMatchSnapshot();
  });
  test("should handle clear action", () => {
    expect(
      peopleReducer(void 0, personActions.clearPersonProfile())
    ).toMatchSnapshot();
  });
});
