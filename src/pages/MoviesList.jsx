import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";

import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

export default function MoviesList() {

    const [moviesList, setMoviesList] = useState([])
    const [find, setFind] = useState('');

    const { setIsLoading } = useContext(GlobalContext)

    const endpoint = 'http://127.0.0.1:1500/movies'

    function getMovies() {

        setIsLoading(true);

        axios.get(endpoint, {
            params: {
                find
            }
        })
            .then(response => {
                console.log(response.data);
                setMoviesList(response.data);
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    };


    function findMovies(event) {
        event.preventDefault();
        getMovies();
    }

    useEffect(getMovies, [])



    return (
        <>

            <form onSubmit={findMovies} className="row g-1">
                <input type="text" className="form-control" placeholder="search movie" value={find} onChange={(event) => setFind(event.target.value)} />
                <button type="submit" className="btn- btn-primary mb-3">go!</button>
            </form>

            {moviesList.length ? moviesList.map((movie) => (
                <div key={movie.id}>
                    <MovieCard movie={movie} />
                </div>

            )) : <div>movies not found</div>}

            <div><MovieForm /> </div>
        </>
    )
}