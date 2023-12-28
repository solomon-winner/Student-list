import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    const [info, setInfo] = useState([]);
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: info.Name,
        email: info.Email
    })

    useEffect(() => {
        axios.get("http://localhost:8081/read/" + id)
        .then(res => {console.log(res)
        setInfo(res.data[0])
        })
        .catch(err => console.log(err));
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/edit", values)
        .then(res => {console.log("success full")
        console.log(res);
    navigate('/');

    })
    .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Update Student information</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input 
                    type="text" 
                    placeholder="Enter Name" 
                    className="form-control"
                    value ={info.Name}
                    onChange = {e => setValues({...values, name: e.target.value})}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input 
                    type= "email" 
                    placeholder="Enter Email" 
                    className = "form-control"
                    value = {info.Email}
                    onChange = {e => setValues({...values, email: e.target.value})}
                    />
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>
    </div>
    )
}

export default Edit;