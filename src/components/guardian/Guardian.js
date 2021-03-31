/* Core */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

/* Hooks */
import { useAuth } from "./hooks/useAuth";

/* Navigation */
import { book } from "../../navigation/book";

export const Guardian = ({ children }) => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace(book.root);
    }
  }, [history, isAuthenticated]);

  return <>{children}</>;
};
