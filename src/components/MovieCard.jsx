import { Link } from "react-router-dom";

function MovieCard({ movie }) {

    const { id, title, director, imagepath, abstract } = movie;
    return (
        <>
            <div className="card">
                <img src={movie.image} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h3 className="card-title">{movie.title}</h3>
                    <h5 className="card-title">{movie.director}</h5>
                    <p className="card-text">{movie.abstract}</p>
                    <Link to={`/movies/${id}`} className="btn btn-primary mt-4">Scheda film</Link>
                </div>
            </div>
        </>

    )
}

export default MovieCard