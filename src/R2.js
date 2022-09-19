import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import './form.css';
const R2 = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const[errMsg, setErrMsg] = useState('');
    const[sucess, setSuccess] = useState(false);

    const emref = useRef();
    const errref = useRef();
    
    useEffect(()=>{
        emref.current.focus();
    }, [])
    useEffect(()=>{
        setErrMsg('');
    }, [email,pass])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setSuccess(true);
        setEmail('');
        setPass('');
    }
    return (
        <>
            {sucess ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br/>
                    <p>
                        <Link to= "/w">Next</Link>
                    </p>
                </section>
            ) : (  
        
    <div className="regis">
        <div className="auth-form-container">
            <p ref={errref} className={errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{errMsg}</p>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com"  id="email" name="email" ref={emref} required />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
               
                <button className="submit" type="submit">Log In</button>
            </form>
           
        </div>
    </div>
    )}
    </>
    );
}
 
export default R2;