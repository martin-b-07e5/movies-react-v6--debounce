const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDIyY2MwMmFmMjkzZDZhMTk3Nzg4ZWVkMjc0YzkzYSIsInN1YiI6IjYyYzM5NjcwM2FmOTI5MDA0YzI5M2RiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fh7ApMHwyMoLlp9NbfKwZ-9MNVi8OMR6BUX_b1XzqxU",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
