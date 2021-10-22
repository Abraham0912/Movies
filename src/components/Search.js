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
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                className={styles.searchInput}
                type="text"
                value={search ?? ""}
                autoFocus
                placeholder="Search..."
                aria-label="Search Movies"
                onChange={(e)=>{
                    const value = e.target.value;
                    history.push("/?search=" + value);//Esto asigna x valor en la url
                }}
                />
                <FaSearch className={styles.searchButton} color="black" size={20}/>
            </div>    
        </form>
    )
}
