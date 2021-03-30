/* Core */
import React from "react";

/* Hooks */
import { useStudent } from "../hooks/useStudent";

export const Profile = () => {
  const { student } = useStudent();

  const profileJSX = student && (
    <>
      <p>Name: {student.firstName}</p>
      <p>Last Name: {student.surname}</p>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Sex: {student.sex}</p>
      <p>Specialty: {student.specialty}</p>
    </>
  );

  return (
    <section>
      <h1>Profile</h1>
      {profileJSX}
    </section>
  );
};
