import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function UpdateEmployeeComponent(props) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [empId, setEmpId] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((res) => {
                setEmpId(res.data.id);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    const updateHandler = (e) => {
        e.preventDefault();
        const employee = { id, firstName, lastName, email };

        EmployeeService.updateEmployee(id, employee)
            .then(res => {
                navigate('/employees');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const cancelHandler = () => {
        navigate('/employees');
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Update Employee</h3>
                    <div className="card-body">
                    <form onSubmit={updateHandler}>
                        <div className="form-group my-2">
                            <label>Employee ID:</label>
                            <input placeholder="Employee ID" name="empId" className="form-control" value={empId} readOnly />
                        </div>
                        <div className="form-group my-2">
                            <label>First Name:</label>
                            <input placeholder="First Name" name="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} pattern="[A-Za-z0-9@#$%^&* ]{3,12}" required />
                            <div className="invalid-feedback">Please enter a valid first name (3-12 characters, alphabets, numbers, special characters).</div>
                        </div>
                        <div className="form-group my-2">
                            <label>Last Name:</label>
                            <input placeholder="Last Name" name="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}  />
                            <div className="invalid-feedback">Please enter a valid last name (3-12 characters, alphabets, numbers, special characters).</div>
                        </div>

                        <div className="form-group my-2">
                            <label>Email:</label>
                            <input placeholder="Email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}" required />
                            <div className="invalid-feedback">Please enter a valid email address.</div>
                        </div>
                        
                        <button type="submit" className='btn btn-success'>Save</button>
                        <button type="button" className='btn btn-danger' onClick={cancelHandler} style={{ marginLeft: "10px" }}>Cancel</button>
                    </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
