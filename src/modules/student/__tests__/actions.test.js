import { studentActions } from "../actions";

describe("Student actions", () => {
  it("should fill student profile", () => {
    expect(
      studentActions.fillProfile({ firstName: "Sasha" })
    ).toMatchSnapshot();
  });
});
