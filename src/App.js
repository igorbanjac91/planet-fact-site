import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect,
  useParams
} from "react-router-dom"
import Header from "./components/Header";
import PlanetCard from './components/Card';
import data from "./data.json";


function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/planet-fact-app.herokuapp.com" >
            <Redirect to="/mercury" />
          </Route>
          <Route path="/:planetName" children={<Planet />} />
        </Switch>
      </div>
    </Router>
  )
}

function Planet() {
  
  const { planetName } = useParams();

  const [planet, setPlanet] = useState(null)

  useEffect(() => {
    let planet = data.find( (planetObj) => planetObj.name === capitalize(planetName))
    setPlanet(planet);
  }, [planetName]) 
  

  function capitalize(word) {
    let first = word.charAt(0);
    return first.toUpperCase() + word.slice(1);
  }
  
  if (planet === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <PlanetCard planetName={planetName} planetObj={planet} />
  )
}

export default App;