import { useState } from 'react'
import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa";

export const Search = () => {
    const [searchText,setSearchText] = useState("Hola cara de bola")
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(searchText)
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                    console.log(e.target.value)
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
