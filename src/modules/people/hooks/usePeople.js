/* Core */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";

/* Actions */
import { peopleActions } from "../actions";

/* Navigation */
import { book } from "../../../navigation/book";

export const usePeople = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { data, isFetching, error, count } = useSelector(
    (state) => state.people
  );
  const params = new URLSearchParams(search);
  const page = params.get("page");

  useEffect(() => {
    const pageQuery = page ? `?page=${page}` : "";
    dispatch(peopleActions.fetchAsync(pageQuery));
  }, [dispatch, page]);

  const setPage = ({ page }) => {
    history.push(`${book.people}?page=${page + 1}`);
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: ({ row, value }) => {
        return <Link to={`${book.people}/${row.id}`}>{value}</Link>;
      },
    },
    { field: "gender", headerName: "Gender", width: 150 },
    { field: "birth_year", headerName: "Birth Year", width: 150 },
    { field: "eye_color", headerName: "Eye Color", width: 150 },
    { field: "hair_color", headerName: "Hair Color", width: 150 },
    { field: "skin_color", headerName: "Skin Color", width: 150 },
    { field: "height", headerName: "Height", width: 150 },
    { field: "mass", headerName: "Mass", width: 150 },
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
