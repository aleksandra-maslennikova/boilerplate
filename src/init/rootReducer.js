/* Core */
import { combineReducers } from "redux";

/* Reducers */
import { studentReducer as student } from "../modules/student/reducer";
import { peopleReducer as people } from "../modules/people/reducer";
import { filmsReducer as films } from "../modules/films/reducer";

export const rootReducer = combineReducers({
  student,
  people,
  films,
});
