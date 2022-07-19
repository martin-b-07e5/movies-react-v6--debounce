// https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
// https://developers.themoviedb.org/3/discover/movie-discover
// https://developers.themoviedb.org/3/search/search-companies

// https://developers.themoviedb.org/3/getting-started/authentication
// https://developers.themoviedb.org/4/getting-started/authorization

// const API = "https://api.themoviedb.org/3";
// const API_TOKEN = "xxxxyyyyyzzzzxxxxyyyyyzzzzxxxxyyyyyzzzz";
const API = process.env.REACT_APP_API;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: "Bearer " + API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
    // convierto en json el rtdo.
    // (el objeto que me viene en json » lo convierto en un objeto de js)
  }).then((result) => result.json());
}
