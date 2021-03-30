/* Core */
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

/* Hooks */
import { useFilm } from "../hooks/useFilm";

/* Styles */
import Styles from "../styles.module.scss";

export const Film = () => {
  const { film, filmError, isFetchingFilm } = useFilm();

  if (isFetchingFilm) {
    return (
      <section className={Styles.progressContainer}>
        <CircularProgress disableShrink />
      </section>
    );
  }

  if (filmError) {
    return <p>Something went wrong</p>;
  }

  const profileJSX = film && (
    <>
      <p>
        <b>Title:</b> {film.title}
      </p>
      <p>
        <b>Release Date:</b> {film["release_date"]}
      </p>
      <p>
        <b>Director:</b> {film.director}
      </p>
      <p>
        <b>Producer: </b> {film.producer}
      </p>
      <p>
        <b>Opening Crawl: </b> {film["opening_crawl"]}
      </p>
    </>
  );

  return (
    <section className={Styles.filmContainer}>
      <h1>Profile</h1>
      {profileJSX}
    </section>
  );
};
