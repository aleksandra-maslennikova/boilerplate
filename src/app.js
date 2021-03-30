/* Core */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

/* Components */
import { Routes } from "./navigation";

/* Store */
import { store } from "./init/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};
