import React from "react";
import { Link } from "react-router-dom"
import"./first.css";
const Wel = () => {
    return ( 
        <div className="welc">
            <section>
                <h2>Welcome, Binghamites</h2>
                <button className="ll" type="submit"><Link to="/r">Log In</Link></button>
            </section>
        </div>
     );
}
 
export default Wel;