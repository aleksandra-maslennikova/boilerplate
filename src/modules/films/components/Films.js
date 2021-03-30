/* Core */
import React from "react";
import { DataGrid } from "@material-ui/data-grid";

/* Hooks */
import { useFilms } from "../hooks/useFilms";

/* Styles */
import Styles from "../styles.module.scss";

export const Films = () => {
  const { rows, columns, page, setPage, count, isFetching, error } = useFilms();

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <h1>Films</h1>
      <section className={Styles.gridContainer}>
        <DataGrid
          page={page}
          onPageChange={setPage}
          pageSize={10}
          rowCount={count}
          pagination
          rows={rows}
          columns={columns}
          paginationMode="server"
          loading={isFetching && !rows.length}
        />
      </section>
    </>
  );
};
