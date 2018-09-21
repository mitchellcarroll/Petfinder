import React from "react";
import { render } from "react-dom";
import {Router, Link} from "@reach/router";
import Results from './Results';
import Details from "./Details";

class App extends React.Component{
  render(){
    return(
        <header>
        <Link to="/">Adopt Me!</Link>
        </header>
        <div> 
        <Router>
        <Results path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
    )
  }
}

render(<App />, document.getElementById("root"));
