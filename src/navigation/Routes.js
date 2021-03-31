/* Core */
import React from "react";
import { Route, Switch } from "react-router-dom";

/* Pages */
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { ProfilePage } from "../pages/ProfilePage";
import { PeoplePage } from "../pages/PeoplePage";
import { PersonPage } from "../pages/PersonPage";
import { FilmsPage } from "../pages/FilmsPage";
import { FilmPage } from "../pages/FilmPage";

/* Components */
import { Header } from "../components/header";
import { Guardian } from "../components/guardian";

/* Navigation */
import { book } from "../navigation/book";

export const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={book.root}>
          <HomePage />
        </Route>
        <Route exact path={book.student}>
          <ProfilePage />
        </Route>
        <Route exact path={book.registration}>
          <RegistrationPage />
        </Route>
        <Guardian>
          <Route exact path={book.people}>
            <PeoplePage />
          </Route>
        </Guardian>
        <Route exact path={book.person}>
          <PersonPage />
        </Route>
        <Route exact path={book.films}>
          <FilmsPage />
        </Route>
        <Route exact path={book.film}>
          <FilmPage />
        </Route>
      </Switch>
    </>
  );
};
