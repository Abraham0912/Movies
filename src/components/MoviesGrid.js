//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";

export function MoviesGrid() {
  const [movies, setMovies]=useState([]);
  //Las siguientes lineas es la verdadera manera de usar el useState, arriba es usando destructuring
  //const movies = moviesState[0];
  //const setMovies = moviesState[0];

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie",
    {
      headers: {
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmU4Nzg5NGMzZDNkYjNjNGVkYWRlN2RiODA2MDAwMyIsInN1YiI6IjYxNmNjMzA5ODk0ZWQ2MDAyMzI3OTNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AyinEchDCJ7NAkbswqZd-0VXwItrDs0ldMkLQVdWD1g",
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then(result=> result.json()).then(data =>{
      setMovies(data.results)
      console.log(movies)
    });
  },[]);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}