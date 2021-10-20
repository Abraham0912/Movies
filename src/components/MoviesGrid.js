//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
  const [movies, setMovies]=useState([]);
  //Las siguientes lineas es la verdadera manera de usar el useState, arriba es usando destructuring
  //const movies = moviesState[0];
  //const setMovies = moviesState[0];

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}