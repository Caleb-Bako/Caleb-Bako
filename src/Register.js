import React, { useState } from "react";
import { Link } from "react-router-dom";
import './form.css';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
    }

    return (
        <div className="regis">
            <div className="auth-form-container">
                <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)}type="text" id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} email="email" onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} pass="pass"onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="submit" type="submit">Log In</button>
            </form>
            <button className="link-btn">Already have an account?<u><Link to= "/log">Login here.</Link> </u></button>
        </div>
    </div>
    )
}
export default Register;