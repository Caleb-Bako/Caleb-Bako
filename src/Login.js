import React, { useState } from "react";
import { Link } from "react-router-dom";
import './form.css';
import {auth} from './firebase'
import { signInWithEmailAndPassword} from 'firebase/auth'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const logi = async ()=>{
        try{
            const users= await signInWithEmailAndPassword(auth, email, pass)
            console.log(users)
        }catch(error){
            console.log(error.message);
            
        }
    }

   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail('');
        setPass('');
    }

    return (
        
        <div className="regis">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com"  id="email" name="email"  required />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
                   
                    <button onClick={logi} className="submit" type="submit">Log In</button>
                </form>
                <button className="link-btn" >Don't have an account?<u><Link to="/reg">Register</Link></u></button>
            </div>
        </div>
            )}
            
export default Login;