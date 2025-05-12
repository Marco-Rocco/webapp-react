export default function MovieCard({ movie }) {
    const { title, director, image, abstract } = movie;

    return (
        <>
            <div className="card">
                <img src={image} alt={title} />
                <div>
                    <h5>{title}</h5>
                    <p>Director: <strong>{director}</strong></p>
                    <p>{abstract}</p>
                </div>
            </div>
        </>
    )
};