import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployeeComponent() {

    let navigate = useNavigate();
    
    // Function to generate a unique employee ID
    const generateUniqueEmployeeId = () => {
        const uniqueId = Math.floor(Math.random() * 100); // Generate a random number
        return `EMP-${uniqueId}`; // Concatenate with a prefix
    }

    const [employee, setEmployee] = useState({
        id: generateUniqueEmployeeId(), // Set initial unique employee ID
        firstName: "",
        lastName: "",
        email: ""
    });

    // Function to handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    }

    // Function to handle save action
    const saveHandler = (e) => {
        e.preventDefault();
        console.log("employee =>" + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res => {
            navigate('/employees');
        })
    }

    // Function to handle cancel action
    const cancelHandler = () => {
        navigate('/employees');
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group my-2">
                                <label>Employee ID:</label>
                                <input type="text" placeholder="Employee ID" name="empId" className="form-control"
                                    value={employee.id} onChange={handleChange}  />
                            </div>
                            <div className="form-group my-2">
                                <label>First Name:</label>
                                <input placeholder="First Name" name="firstName" className="form-control"
                                    value={employee.firstName} onChange={handleChange} pattern="[A-Za-z@#$%^&*]{3,12}" required />
                                <div className="invalid-feedback">Please enter a valid first name (3-12 characters, alphabets, numbers, special characters).</div>
                            </div>
                            <div className="form-group my-2">
                                <label>Last Name:</label>
                                <input placeholder="Last Name" name="lastName" className="form-control"
                                    value={employee.lastName} onChange={handleChange} pattern="[A-Za-z@#$%^&*]{3,12}" required />
                                <div className="invalid-feedback">Please enter a valid last name (3-12 characters, alphabets, numbers, special characters).</div>
                            </div>
                            <div className="form-group my-2">
                                <label>Email:</label>
                                <input type="email" placeholder="Email" name="email" className="form-control"
                                    value={employee.email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                                <div className="invalid-feedback">Please enter a valid email address.</div>
                            </div>

                            <button className='btn btn-success' type="submit" onClick={saveHandler}>Save</button>
                            <button className='btn btn-danger' onClick={cancelHandler} style={{ marginLeft: "10px" }}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
