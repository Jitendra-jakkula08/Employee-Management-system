import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-2">
                                    <img src={logo} alt="Logo" className="img-fluid rounded-circle" style={{ width: '50px' }} /> {/* Add your logo here */}
                                </div>
                                <div className="col-md-8 text-center">
                                    <Link to="/" className='navbar-brand'>Employee Management</Link>
                                </div>
                                <div className="col-md-2">
                                    {/* Empty column for spacing */}
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Signup</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}
