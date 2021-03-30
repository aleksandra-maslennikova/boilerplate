/* Core */
import React from "react";

/* Hooks */
import { useStudent } from "../hooks/useStudent";

/* Components */

import { RegistrationForm } from "./RegistrationForm";

export const StudentRegistration = () => {
  const { fillStudent } = useStudent();

  return (
    <section>
      <h1>Registration</h1>
      <RegistrationForm onSubmit={fillStudent} />
    </section>
  );
};
