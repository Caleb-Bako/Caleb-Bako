import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Hole Areana</h1>
            <div className="links">
                <Link to="/w">Home</Link>
                <Link to="/create">New Zone</Link>
                <Link to="/log">Login</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;