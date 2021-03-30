/* Config */
import { root } from "./config";

export const api = Object.freeze({
  people: {
    fetch: (page) => {
      return fetch(`${root}/people${page}`, {
        method: "GET",
      });
    },
  },
  person: {
    fetch: (id) => {
      return fetch(`${root}/people/${id}`, {
        method: "GET",
      });
    },
  },
  films: {
    fetch: (page) => {
      return fetch(`${root}/films${page}`, {
        method: "GET",
      });
    },
  },
  film: {
    fetch: (id) => {
      return fetch(`${root}/films/${id}`, {
        method: "GET",
      });
    },
  },
});
