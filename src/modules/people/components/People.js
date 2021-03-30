/* Core */
import React from "react";
import { DataGrid } from "@material-ui/data-grid";

/* Hooks */
import { usePeople } from "../hooks/usePeople";

/* Styles */
import Styles from "../styles.module.scss";

export const People = () => {
  const {
    rows,
    columns,
    page,
    setPage,
    count,
    isFetching,
    error,
  } = usePeople();

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <h1>People</h1>
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
