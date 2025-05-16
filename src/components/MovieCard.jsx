import { Link } from "react-router-dom";

function MovieCard({ movie }) {

    const { id, title, director, imagepath, abstract, average_vote } = movie;
    return (
        <>
            <div className="card">
                <img src={imagepath} className="w-50 mx-auto" alt={title} />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5 className="card-title">{director}</h5>
                    <p className="card-text">{abstract}</p>
                    <p className="card-text">average vote:{average_vote}</p>
                    <Link to={`/movies/${id}`} className="btn btn-primary mt-4">movie details</Link>
                </div>
            </div>
        </>

    )
}

export default MovieCard