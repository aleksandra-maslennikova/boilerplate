/* Core */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

/* Actions */
import { filmActions } from "../actions";

export const useFilm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { film, isFetchingFilm, filmError } = useSelector(
    (state) => state.films
  );

  useEffect(() => {
    if (id) {
      dispatch(filmActions.fetchAsync(id));
    }

    return () => dispatch(filmActions.clearFilmProfile());
  }, [dispatch, id]);

  return {
    film,
    isFetchingFilm,
    filmError,
  };
};
