import React from "react";
import Holelist from "./Holelist";
import useFetch from "./useFetch";
const Home = () => {
  const{data:Hole,isPending,error} = useFetch('http://localhost:8000/hole'); 
  
    
    return (
        <div className="home">
            {error && <div>{error}</div>}   
            {isPending && <div>Loading...</div>}    
            {Hole && <Holelist Hole={Hole}/>}
        </div>
    );
}
 
export default Home; 