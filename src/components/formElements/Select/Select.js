/* Core */
import React from "react";
import { useField } from "formik";
import cx from "classnames";

/* Styles */
import Styles from "../styles.module.scss";

export const Select = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props });
  const error = meta.touched && meta.error;

  return (
    <div className={cx(Styles.formElement, { [Styles.error]: error })}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        id={props.id || props.name}
        className={cx({ [Styles.error]: error })}
      />
      {error && <div className={Styles.error}>{error}</div>}
    </div>
  );
};
