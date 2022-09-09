import React from "react";
import { Link } from "react-router-dom";
const Holelist = ({Hole}) => {

    return (
        <div className="Hole-list">
               {Hole.map((hole)=>(
            <div className="hole-preview" key={hole.id}>
                <Link to={`/holes/${hole.id}`}>
                    <h2>{hole.title}</h2>
                    <p>Written by {hole.author}</p>
                </Link>
            </div>
           ))} 
        </div>

    );
}
 
export default Holelist;