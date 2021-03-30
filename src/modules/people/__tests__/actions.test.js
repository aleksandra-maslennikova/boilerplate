/* Actions */
import { peopleActions, personActions } from "../actions";

/* Mocks */
import { peopleMock, personMock } from "../__mocks__/mocks";

describe("People actions", () => {
  it("should start fetching", () => {
    expect(peopleActions.startFetching()).toMatchSnapshot();
  });
  it("should stop fetching", () => {
    expect(peopleActions.stopFetching()).toMatchSnapshot();
  });
  it("should fetch people", () => {
    expect(peopleActions.fetchAsync()).toMatchSnapshot();
  });
  it("should fill people", () => {
    expect(peopleActions.fill(peopleMock)).toMatchSnapshot();
  });
  it("should set fetching error", () => {
    expect(
      peopleActions.setFetchingError("We have an error !")
    ).toMatchSnapshot();
  });
});

describe("Person actions", () => {
  it("should start fetching", () => {
    expect(personActions.startFetching()).toMatchSnapshot();
  });
  it("should stop fetching", () => {
    expect(personActions.stopFetching()).toMatchSnapshot();
  });
  it("should fetch person", () => {
    expect(personActions.fetchAsync()).toMatchSnapshot();
  });
  it("should fill person", () => {
    expect(personActions.fillPersonProfile(personMock)).toMatchSnapshot();
  });
  it("should set fetching error", () => {
    expect(
      personActions.setFetchingError("We have an error !")
    ).toMatchSnapshot();
  });
  it("should clear person profile", () => {
    expect(personActions.clearPersonProfile()).toMatchSnapshot();
  });
});
