import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";

const Read = () => {
    const {id} = useParams();
    const [student, setStudent] =useState([]);
    useEffect(() => {
    axios.get('http://localhost:8081/read/'+id)
    .then(res => {console.log(res.data[0])
        setStudent(res.data[0])})
    .catch(err => console.log(err));
    }, [])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                 <div className="p-2">
                    <h2>Student Detail</h2>
                    {console.log(student)}
                  <h2>{student.ID}</h2>
                <h2>{student.Name}</h2>
                <h2>{student.Email}</h2> 
                </div>
                 
                <Link to = "/" className="btn btn-primary me-2">Back</Link>
                <Link to = {`/edit/${student.ID}`} className="btn btn-primary">Edit</Link>
            </div>
        </div>
    )
}

export default Read;