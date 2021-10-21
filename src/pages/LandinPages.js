import React from 'react'
import { MoviesGrid } from '../components/MoviesGrid'
import { Search } from '../components/Search'
import { useQuery } from '../my_hoocks/useQuery';

export const LandinPages = () => {
    const query = useQuery();
    const search = query.get("search")
    return (
        <div>
            <Search/>
            <MoviesGrid key={search} search={search}/>
        </div>
    )
}
