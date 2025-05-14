import axios from "axios";
import { useState } from "react"
import { useParams, useRouteLoaderData } from "react-router-dom";

export default function ReviewForm() {

    const { id } = useParams();

    const initialValues = {
        name: '',
        text: '',
        vote: ''
    }

    const [formData, setFormData] = useState(initialValues)

    const endpoint = `http://127.0.0.1:1500/movies/${id}/reviews`

    function changeForm(event) {
        const value = event.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: value
        }));
    }

    function sendForm(event) {
        event.preventDefault();

        axios.post(endpoint,
            { ...formData, vote: parseInt(formData.vote) })
            .then(response => console.log(response.data))
            .catch(err => console.log(err));

        setFormData(initialValues);
    }


    return (
        <>
            <div className="card">
                <div className="card-header">
                    write your review
                </div>
                <div className="card-body">
                    <form onSubmit={sendForm}>
                        <div className="mb-3">
                            <label className="form-label">your name</label>
                            <input type="text" name="name" value={formData.name} onChange={changeForm} className="form-control" />
                        </div>

                        <select className="form-select mb-3" name="vote" onChange={changeForm} >
                            <option value={formData.vote}  >select your vote!</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <div className="mb-3">
                            <label className="form-label">comment your review</label>
                            <input type="text" name="text" value={formData.text} onChange={changeForm} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}