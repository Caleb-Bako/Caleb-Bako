import { useHistory, useParams } from "react-router-dom";
import React from "react";
import useFetch from "./useFetch";
const HoleDetails = () => {
    const{id} = useParams();
    const{data: hole, error, isPending} = useFetch('http://localhost:8000/hole/'+ id)
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/hole/' + hole.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
      <div className="hole-details">
         {error && <div>{error}</div>}   
         {isPending && <div>Loading...</div>}
         {hole && (
            <article>
                <h2>{hole.title}</h2>
                <p>Written by {hole.author}</p>
                <div>{hole.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
         )}  
      </div>  
    );
}
 
export default HoleDetails;