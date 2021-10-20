import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {

    const { signInUsingGoogle } = useAuth();
    // const processLogin = (email, password) => {

   

    return (
        <div>
            <div className="form-bg">
                <h2>Login Please</h2>
                <form >
                    <input className="input w-50" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="input w-50 my-3" type="password" name="" id="" placeholder="Enter password" />
                    <br />
                    <input className="input w-25 bg-primary text-white" type="submit" value="Submit" />
                </form>
                <p>New User? <Link to="/register">Create Account</Link></p>
                <div>---------or--------</div>
                <button
                    className="button "
                    onClick={signInUsingGoogle}
                >Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;