/* Core */
import { createStore, combineReducers } from "redux";

/* Reducers */
import { studentReducer as student } from "../../modules/student/reducer";
import { peopleReducer as people } from "../../modules/people/reducer";
import { filmsReducer as films } from "../../modules/films/reducer";

/* Store */
import { store } from "../store";

export const referenceRootReducer = combineReducers({
  student,
  people,
  films,
});

const referenceStore = createStore(referenceRootReducer);

describe("Redux store", () => {
  it("should have a valid state shape", () => {
    expect(store.getState()).toStrictEqual(referenceStore.getState());
  });
});
