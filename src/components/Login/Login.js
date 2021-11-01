import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import useFirebage from './../../hooks/useFirebage';
import useAuth from './../../hooks/useAuth';

const Login = () => {

    const { googleSignIn, signOutGoogle, signInUsers } = useAuth()


    return (
        <div className="fdsf text-center p-5">
            <div class="login_wrapper">
                <img width="50%" src="https://img-public.freepik.com/preview/free-vector/mobile-login-concept-illustration_114360-135.jpg" alt="" />
                <br />
                <Link to="/add"> <button onClick={googleSignIn} class="button-9">Login With Google</button></Link>





            </div>
        </div>
    );
};

export default Login;