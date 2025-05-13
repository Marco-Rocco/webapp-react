import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";



export default function MoviesDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState({})

    const endpoint = `http://127.0.0.1:1500/movies/${id}`

    function getMovie() {
        axios(endpoint)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err))
    }

    useEffect(getMovie, [id])

    function getReviews() {
        if (!movies.reviews || movies.reviews.length === 0) {
            return <p>Nessuna recensione disponibile.</p>;
        }

        return movies.reviews.map(review => (
            <ReviewCard key={id} data={review} />
        ));
    }


    return (
        <>
            <div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-2">
                            <img src={movie.imagepath} className="img-fluid rounded-start" alt={movie.title} />
                        </div>
                        <div className="col-10">
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.director}</p>
                                <p className="card-text"><small className="text-body-secondary">{movie.abstract}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                {getReviews.length ? getReviews.map((review) => (
                    <div key={review.id}>
                        <ReviewCard review={review} />
                    </div>

                )) : <div>reviews not found</div>}

            </div>
        </>
    )
}

