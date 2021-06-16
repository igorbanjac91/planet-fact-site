import React from "react";


function PlanetCard() {

  return (
    <div className="planet-card">
      <CardNav />
      <CardMain />
      <CardInfoList />
    </div>
  )

}

function CardNav() {
  return (
    <nav className="planet-card__nav">
      <ul>
        <li><a>Overview</a></li>
        <li><a>Structure</a></li>
        <li><a>Surface</a></li>
      </ul>
    </nav>
  )
}


function CardMain(params) {
  return (
    <main className="planet-card__main">
      <img src="" alt="planet" />
      <h2>Planet Name</h2>
      <p>About the planet</p>
      <p>Source: <a href="#">Wikipedia</a></p>
    </main>
  )
}

function CardInfoList(params) {
  
  return (
    <ul className="planet-card__info">
      <InfoListItem />
      <InfoListItem />
      <InfoListItem />
      <InfoListItem />
    </ul>
  )
}

function InfoListItem(params) {
  return (
    <li>
      <span>Rotation Time</span>
      <sapn>50 days</sapn>
    </li>
  )
}


export default PlanetCard;