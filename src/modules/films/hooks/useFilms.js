/* Core */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";

/* Actions */
import { filmsActions } from "../actions";

/* Navigation */
import { book } from "../../../navigation/book";

export const useFilms = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { data, isFetching, error, count } = useSelector(
    (state) => state.films
  );
  const params = new URLSearchParams(search);
  const page = params.get("page");

  useEffect(() => {
    const pageQuery = page ? `?page=${page}` : "";
    dispatch(filmsActions.fetchAsync(pageQuery));
  }, [dispatch, page]);

  const setPage = ({ page }) => {
    history.push(`${book.films}?page=${page + 1}`);
  };

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: ({ row, value }) => {
        return <Link to={`${book.films}/${row.id}`}>{value}</Link>;
      },
    },
    { field: "release_date", headerName: "Release Date", width: 150 },
    { field: "director", headerName: "Director", width: 200 },
    { field: "producer", headerName: "Producer", width: 400 },
  ];

  // This is a workaround to fix Material UI out of range warning
  const currentPage = page && page > 1 && data.length ? Number(page - 1) : 0;

  return {
    rows: data,
    columns,
    isFetching,
    error,
    page: currentPage,
    setPage,
    count,
  };
};
