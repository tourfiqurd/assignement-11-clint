import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { googleSignIn, signOutGoogle, signInUsers, user } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <Link to="/" className="navbar-brand" href="#">The Travel</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobileToggle" aria-controls="navbarMobileToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMobileToggle">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <Link to="/promotions" className="nav-link">Promotions</Link>
                            <li className="nav-item">
                                <Link to="/add" className="nav-link">Add New</Link>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" href="#">Login</Link>
                            </li>

                        </ul>


                        <div className="btn-group">

                            <Link to="/" href="#" className="dropdown-toggle text-decoration-none text-light" data-bs-toggle="dropdown">
                                {user.email ? <span>{user.displayName} <button onClick={signOutGoogle}>Log Out</button></span> : <Link to="/login"><button>LogIn</button></Link>}

                            </Link>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;