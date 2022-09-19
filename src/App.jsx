import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from "./Create";
import HoleDetails from "./HoleDetails";
import NotFound from "./NotFound";
import Register from "./Register";
import Login from "./Login";
import Wel from "./wel";
import R2 from "./R2";
import "./index.css";
function App() {
  
  
  return (
    

    <Router>
    
      <div className="App">
        <div className="dope">
        <Switch>
        <Route path="/r">
              <R2/>
            </Route>
            <Route path="/w">
              <Wel/>
            </Route>
        
        </Switch>
        </div>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
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
          </Switch>      
        </div>
      </div>
    </Router>
  

  );
}

export default App;