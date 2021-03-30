/* Core */
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

/* Actions */
import { studentActions } from "../actions";

/* Navigation */
import { book } from "../../../navigation/book";

export const useStudent = () => {
  const selector = (state) => state.student;
  const { data } = useSelector(selector);
  const dispatch = useDispatch();
  const history = useHistory();

  const fillStudent = (profile) => {
    const action = studentActions.fillProfile(profile);

    dispatch(action);
    history.push(book.student);
  };

  return {
    student: data,
    fillStudent,
  };
};
