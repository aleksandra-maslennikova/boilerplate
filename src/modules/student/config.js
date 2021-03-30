/* Core */
import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  surname: "",
  email: "",
  age: "",
  specialty: "",
  sex: "",
};

export const sexOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export const specialtyOptions = [
  { label: "", value: "" },
  { label: "Designer", value: "designer" },
  { label: "Developer", value: "developer" },
  { label: "Writer", value: "writer" },
];

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .strict(true)
    .typeError("First name must be a string"),
  surname: Yup.string()
    .required("Surname is required")
    .strict(true)
    .typeError("Surname must be a string"),
  email: Yup.string()
    .email("Should be a valid email")
    .required("Email is required"),
  age: Yup.number()
    .min(6, "Minimum age is 6")
    .max(60, "Maximum age is 60")
    .strict(true)
    .typeError("Age must be a number"),
  specialty: Yup.string()
    .required("Specialty is required")
    .oneOf(
      ["designer", "developer", "writer"],
      "You should put a correct specialty"
    ),
  sex: Yup.string()
    .required("Sex is required")
    .oneOf(["male", "female"], "You should put a correct sex"),
});
