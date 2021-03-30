import { types } from "./types";

export const studentActions = {
  fillProfile: (profile) => {
    return {
      type: types.FILL_STUDENT_PROFILE,
      payload: profile,
    };
  },
};
