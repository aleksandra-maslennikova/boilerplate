/* Core */
import React from "react";
import { Field } from "formik";
import cx from "classnames";

/* Styles */
import Styles from "../styles.module.scss";

export const RadioButtonsGroup = ({
  label,
  items,
  touched,
  errors,
  ...props
}) => {
  const error = touched[props.name] && errors[props.name];

  const radioButtonsJSX = items.map((item) => (
    <div className={Styles.radioButton} key={item.value}>
      <label htmlFor={item.value}>{item.label}</label>
      <Field type="radio" {...props} value={item.value} id={item.value} />
    </div>
  ));

  return (
    <div className={cx(Styles.radioButtonsGroup, { [Styles.error]: error })}>
      <label className={Styles.label}>{label}</label>
      <div className={Styles.radioButtons}>{radioButtonsJSX}</div>
      {error && <div className={Styles.error}>{error}</div>}
    </div>
  );
};
