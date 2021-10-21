//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import { useQuery } from "../my_hoocks/useQuery";


export function MoviesGrid() {
  const [movies, setMovies]=useState([]);
  //Las siguientes lineas es la verdadera manera de usar el useState, arriba es usando destructuring
  //const movies = moviesState[0];
  //const setMovies = moviesState[0];

  const [loading,setLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search")

  useEffect(() => {
    setLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }, [search]);

  if(loading){
    return <Spinner/>
  }
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}