import React from 'react'
import movie from "./movie.json";
//import movies from "../components/movies.json";
import styles from "./MoviesDetails.module.css"

export const MoviesDetails = () => {
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            {/* La siguiente linea es una opcion para poner mas de un className 
            <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} /> */}
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={styles.col + " " + styles.movieDetails}>
                <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
                <p>
                    <strong>Generes:</strong>{movie.genres.map(genere => genere.name).join(", ")}
                </p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    )
}
