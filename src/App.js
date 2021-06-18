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

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" >
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

    async function fethcData(name = "Mercury") {
      let response = await fetch('./data.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })    
      let data =  await response.json()
      data.find( (planetObj) => {
        if (planetObj.name === capitalize(name) ) {
           setPlanet(planetObj)
        }
      })
    }
    fethcData(planetName);
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