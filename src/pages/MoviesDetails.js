import { useEffect, useState } from 'react'
//import movie from "./movie.json";
import { useParams } from "react-router";
//import movies from "../components/movies.json";
import { get } from '../utils/httpClient';
import styles from "./MoviesDetails.module.css"

export const MoviesDetails = () => {
    const { id } = useParams()
    console.log(id)

    const [movie,setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + id).then((data) => {
            console.log(data)
            setMovie(data);
        });
      }, [id]);
    
      if (!movie) {
        return null;
      }

      const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
      const imageUrlBack = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
    return (
        <div className={styles.detailsContainer}>
            {/* La siguiente linea es una opcion para poner mas de un className 
            <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} /> */}
            
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={styles.col + " " + styles.movieDetails}>
                <p className={styles.firstItem}><strong>Title: </strong> {movie.title}</p>
                <p>
                    <strong>Generes: </strong>{movie.genres.map(genere => genere.name).join(", ")}
                </p>
                <p><strong>Description: </strong> {movie.overview}</p>
                <p><strong>Fecha de lanzamiento: </strong>{movie.release_date.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1')}</p>
                <p><strong>Popularity: </strong>{movie.popularity}</p>
            </div>
        </div>
    )
}
