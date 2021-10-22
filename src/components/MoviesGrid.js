//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component"
import { Empty } from "./Empty";


export function MoviesGrid({search}) {
  const [movies, setMovies]=useState([]);
  //Las siguientes lineas es la verdadera manera de usar el useState, arriba es usando destructuring
  //const movies = moviesState[0];
  //const setMovies = moviesState[0];
  const [loading,setLoading] = useState(true);
  const [page,setPage]=useState(1);
  const [hasMore,setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      console.log(data)
      setHasMore(data.page < data.total_pages)
      setLoading(false);
    });
  }, [search,page]);

  if (!loading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
     dataLength={movies.length}
     hasMore={hasMore}
     next={()=>setPage((prevPage)=>prevPage +1)}//Cambiar el estado a aprtir de un estado anterior
     loader={<Spinner/>}
    >
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
    </InfiniteScroll>
  );
}