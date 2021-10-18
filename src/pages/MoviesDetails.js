import React from 'react'
import movie from "./movie.json";
import movies from "../components/movies.json";
import styles from "./MoviesDetails.module.css"

export const MoviesDetails = () => {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movies.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <br />
            <br />
            <br />
            <br />
            <img src={imageUrl} alt="" />
            Aqui deberia estar los detalles de la pelicola || RESTAURANTE
            m
        </div>
    )
}
