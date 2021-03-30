/* Core */
import React from "react";
import { NavLink } from "react-router-dom";

/* Config */
import * as config from "./config";

/* Styles */
import Styles from "./styles.module.scss";

export const Header = () => {
  const navLinksJSX = config.navLinks.map((link) => (
    <li key={link.to}>
      <NavLink to={link.to} activeClassName={Styles.active}>
        {link.label}
      </NavLink>
    </li>
  ));

  return (
    <section className={Styles.header}>
      <nav>
        <ul>{navLinksJSX}</ul>
      </nav>
    </section>
  );
};
