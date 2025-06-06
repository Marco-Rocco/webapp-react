import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";


import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";


export default function MoviesDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState({})

    const { setIsLoading } = useContext(GlobalContext)

    const endpoint = `http://127.0.0.1:1500/movies/${id}`

    function getMovie() {
        setIsLoading(true)
        axios(endpoint)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(getMovie, [id])

    function getReviews() {
        if (!movie.reviews || movie.reviews.length === 0) {
            return <p>Nessuna recensione disponibile.</p>;
        }

        return movie.reviews.map(review => (
            <ReviewCard key={review.id} data={review} />
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

                <div>{getReviews()}</div>


                {/* form aggiunta review */}
                <div><ReviewForm /></div>



            </div>
        </>
    )
}

