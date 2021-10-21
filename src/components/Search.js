import { useEffect, useState } from 'react'
import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa";
import { useHistory } from 'react-router';
import { useQuery } from '../my_hoocks/useQuery';

export const Search = () => {
    const query = useQuery();
    const search = query.get("search")

    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                value={search}
                onChange={(e)=>{
                    const value = e.target.value;
                    history.push("/?search=" + value);//Esto asigna x valor en la url
                }} 
                className={styles.searchInput} placeholder="Buscar..." 
                type="text" />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20}/>
                </button>
            </div>    
        </form>
    )
}
