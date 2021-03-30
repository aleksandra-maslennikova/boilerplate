import { types } from "./types";

const initialState = {
  data: {
    firstName: "",
    surname: "",
    email: "",
    age: "",
    specialty: "",
    sex: "",
  },
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILL_STUDENT_PROFILE: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};
