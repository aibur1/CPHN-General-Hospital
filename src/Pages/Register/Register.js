import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must Contain 2 upper case.');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    // const createNewUser = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             setError('');
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })
    // }

    return (
        <div>
            <div className="form-bg">
                <h2>Please Register</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} className="input w-50" type="email" name="" id="" placeholder="Your Email" required />
                    <br />
                    <input onBlur={handlePasswordChange} className="input w-50 my-3" type="password" name="" id="" placeholder="Enter Password" required />
                    {/* <br />
                    <input onBlur={handlePasswordChange} className="input w-50 mb-3" type="password" name="" id="" placeholder=" Re-enter Password" /> */}
                    <div clsssName="row mb-3 text-danger">{error}</div>
                    <br />
                    <input className="input w-25 bg-primary text-white" type="submit" value="Register" />
                </form>
                <p>Already have an account?<Link to="/login">Login</Link></p>
                <div>---------or-----------</div>
                <button className="btn-regular button">Google Sign In</button>

            </div>
        </div>
    );
};

export default Register;