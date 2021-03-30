/* Navigation */
import { book } from "../../navigation/book";

export const navLinks = [
  { to: book.registration, label: "Registration" },
  { to: book.student, label: "Profile" },
  { to: `${book.people}?page=1`, label: "People" },
  { to: `${book.films}?page=1`, label: "Films" },
];
