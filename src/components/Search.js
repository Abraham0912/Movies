import { useEffect, useState } from 'react'
import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa";
import { useHistory } from 'react-router';
import { useQuery } from '../my_hoocks/useQuery';

export const Search = () => {
    const query = useQuery();
    const search = query.get("search")

    const [searchText,setSearchText] = useState("")

    const history = useHistory();

    useEffect(()=>{
        setSearchText(search||"")
    },[search]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push("/?search=" + searchText);//Esto asigna x valor en la url
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                value={searchText}
                onChange={(e)=>{
                    const value = e.target.value;
                    setSearchText(e.target.value)
                    history.push("/?search=" + value);
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
