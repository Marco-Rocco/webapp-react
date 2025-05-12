import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function MoviesList() {

    const [moviesList, setMoviesList] = useState([])
    const endpoint = 'http://127.0.0.1:1500/movies'

    function getMovies() {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data)
                setMoviesList(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    };

    useEffect(getMovies, [])

    return (
        <>

            <MovieCard />

        </>
    )
}