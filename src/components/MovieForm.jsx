import axios from "axios";
import { useState } from "react"
import { useParams } from "react-router-dom";

export default function MovieForm() {


    const initialValues = {
        title: '',
        director: '',
        abstract: ''
    }

    const [formData, setFormData] = useState(initialValues)

    const endpoint = `http://127.0.0.1:1500/movies`

    function changeForm(event) {
        const value = event.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: value
        }));
    }

    function sendForm(event) {
        event.preventDefault();

        axios.post(endpoint, formData)
            .then(response => {
                console.log(response.data)
                window.location.reload();
            })
            .catch(err => console.log(err));

        setFormData(initialValues);
    }


    return (
        <>
            <div className="card">
                <div className="card-header">
                    add your movie
                </div>
                <div className="card-body">
                    <form onSubmit={sendForm}>
                        <div className="mb-3">
                            <label className="form-label">add movie title</label>
                            <input type="text" name="title" value={formData.title} onChange={changeForm} className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">add director name</label>
                            <input type="text" name="director" value={formData.director} onChange={changeForm} className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">write the abstract</label>
                            <input type="text" name="abstract" value={formData.abstract} onChange={changeForm} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}