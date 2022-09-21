import { Link ,useLocation} from "react-router-dom";
import React from "react";
const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="navbar"
              style={{display: `${location.pathname === "/" && "none"}`}}
              styl={{display: `${location.pathname === "/r" && "none"}`}}
              >
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