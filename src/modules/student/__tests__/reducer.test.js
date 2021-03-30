/* Reducer */
import { studentReducer } from "../reducer";

/* Actions */
import { studentActions } from "../actions";

describe("Student reducer", () => {
  test("should return initial state by default", () => {
    expect(studentReducer(void 0, {})).toMatchSnapshot();
  });

  test("should handle fill action", () => {
    expect(
      studentReducer(void 0, studentActions.fillProfile({ name: "Sasha" }))
    ).toMatchSnapshot();
  });
});
