/* Core */
import React from "react";
import { Form, Formik } from "formik";

/* Components */
import {
  TextField,
  Select,
  RadioButtonsGroup,
} from "../../../components/formElements";

/* Config */
import * as config from "../config";

export const RegistrationForm = (props) => {
  return (
    <Formik
      onSubmit={props.onSubmit}
      initialValues={config.initialValues}
      validationSchema={config.validationSchema}
    >
      {(props) => {
        return (
          <Form>
            <TextField type="text" name="firstName" label="First name" />
            <TextField type="text" name="surname" label="Surname" />
            <TextField type="number" name="age" label="Age" />
            <TextField type="email" name="email" label="Email" />
            <RadioButtonsGroup
              name="sex"
              label="Sex"
              items={config.sexOptions}
              errors={props.errors}
              touched={props.touched}
            />
            <Select name="specialty" label="Specialty">
              {config.specialtyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
