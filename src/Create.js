import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[isPending,setIsPending]= useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const hole = {title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/hole',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(hole)
        }).then(()=>{
            console.log('new hole added');
            setIsPending(false);
            history.push('/');
        })
    }
    return (
       <div className="create">
          <h2>Add New Waypoint</h2>
          <form onSubmit={handleSubmit}>
             <label>Zone title:</label>
             <input 
                type="text"
                required
                value = {title}
                onChange={(e)=> setTitle(e.target.value)}
              />
              <label>Zone body:</label>
              <textarea
                required
                value = {body}
                onChange={(e)=> setBody(e.target.value)}>   
              </textarea>
              <label>Zone author:</label>
              <select
              value = {author}
              onChange={(e)=> setAuthor(e.target.value)}>
                <option value="Caleb">Caleb</option>
                <option value="Kalid">Kalid</option>
              </select>
              {!isPending && <button>Achieve</button>}
              {isPending && <button disabled>Achieving...</button>}
              
          </form>  
       </div>
      );
}
 
export default Create;
