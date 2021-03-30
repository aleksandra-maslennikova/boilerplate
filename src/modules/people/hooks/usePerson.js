/* Core */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

/* Actions */
import { personActions } from "../actions";

export const usePerson = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { person, isFetchingPerson, personError } = useSelector(
    (state) => state.people
  );

  useEffect(() => {
    if (id) {
      dispatch(personActions.fetchAsync(id));
    }

    return () => dispatch(personActions.clearPersonProfile());
  }, [dispatch, id]);

  return {
    person,
    isFetchingPerson,
    personError,
  };
};
