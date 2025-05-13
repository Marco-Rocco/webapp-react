export default function ReviewCard({ data }) {
    const { name, text, vote } = data;

    return (
        <>
            <div className="card mb-3 mt-3">
                <div className="card-body">
                    <p>Utente: {name}</p>
                    <p className="card-text">Voto medio: {vote}</p>
                    <p>Descrizione: {text}</p>
                </div>
            </div>
        </>
    )
}