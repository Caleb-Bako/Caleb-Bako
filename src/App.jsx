import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import{BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom'
import Create from "./Create";
import HoleDetails from "./HoleDetails";
import NotFound from "./NotFound";
import Register from "./Register";
import Login from "./Login";
import Wel from "./wel";
import R2 from "./R2";
import "./index.css";
function App() {
  
  const location = useLocation()
  
  
  return (
    

    <Router>
    
      <div className="App">
        
    {location.pathName !== "/" && <Navbar/>}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Wel/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/holes/:id">
              <HoleDetails/>
            </Route>
            <Route path="f">
              <NotFound/>
            </Route>
            <Route path="/reg" >
              <Register/>
            </Route>
            <Route path="/log">
              <Login/>
            </Route>
      
          <Route path="/r">
              <R2/>
            </Route>
            <Route path="/w">
              <Home/>
            </Route>
        
      
          </Switch>      
        </div>
      </div>
    </Router>
  

  );
}

export default App;
