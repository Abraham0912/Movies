import { MoviesGrid } from '../components/MoviesGrid'
import { Search } from '../components/Search'
import { useDebounce } from '../my_hoocks/useDebounce';
import { useQuery } from '../my_hoocks/useQuery';

export const LandinPages = () => {
    const query = useQuery();
    const search = query.get("search")

    const debouncedSearch = useDebounce(search,800);
    return (
        <div>
            <Search/>
            <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
    )
}
