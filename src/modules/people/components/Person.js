/* Core */
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

/* Hooks */
import { usePerson } from "../hooks/usePerson";

/* Styles */
import Styles from "../styles.module.scss";

export const Person = () => {
  const { person, personError, isFetchingPerson } = usePerson();

  if (isFetchingPerson) {
    return (
      <section className={Styles.progressContainer}>
        <CircularProgress disableShrink />
      </section>
    );
  }

  if (personError) {
    return <p>Something went wrong</p>;
  }

  const profileJSX = person && (
    <>
      <p>
        <b>Name:</b> {person.name}
      </p>
      <p>
        <b>Gender:</b> {person.gender}
      </p>
      <p>
        <b>Birth year:</b> {person["birth_year"]}
      </p>
      <p>
        <b>Eye color: </b> {person["eye_color"]}
      </p>
      <p>
        <b>Hair color:</b> {person["hair_color"]}
      </p>
      <p>
        <b>Skin color:</b> {person["skin_color"]}
      </p>
      <p>
        <b>Height: </b> {person.height}
      </p>
      <p>
        <b>Mass:</b> {person.mass}
      </p>
    </>
  );

  return (
    <section className={Styles.personContainer}>
      <h1>Profile</h1>
      {profileJSX}
    </section>
  );
};
