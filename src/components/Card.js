import React, { useState, useEffect } from "react";


function PlanetCard(props) {

  return (
    <div className="planet-card">
      <CardMain 
        planet={props.planetObj}
        name={props.planetObj.name}
        overview={props.planetObj.overview} 
        structure={props.planetObj.structure} 
        geology={props.planetObj.geology} 
        images={props.planetObj.images} 
      />
      <CardInfoList planet={props.planetObj}/>
    </div>

  );
}

function CardMain(props) {

  const [name, setName] = useState(props.name)
  const [text, setText] = useState(props.overview.content)
  const [imageUrl, setImageUrl] = useState(props.images.planet)
  const [imageSurfacePath, setImageSurfacePath] = useState(props.images.geology)
  const [wikipediaUrl, setWikipediaUrl] = useState(props.overview.source)
  const [showSurfaceImage, setShowSurfaceImage] = useState(false)
  const [planetSize, setPlanetSize] = useState(50)

  useEffect(() => {
    showOverview();

    if (name === "Mercury") {
      setPlanetSize(30);
    }
  
  }, [props.name])

  function showOverview() {
    setName(props.name);
    setText(props.overview.content);
    setImageUrl(props.images.planet);
    setWikipediaUrl(props.overview.source);
    hideImage();
  }

  function showStructure() {
    setText(props.planet.structure.content);
    setImageUrl(props.images.internal);
    setWikipediaUrl(props.planet.structure.source);
    hideImage()
  }

  function showSurface() {
    setText(props.planet.geology.content);
    setWikipediaUrl(props.planet.geology.source);
    setImageSurfacePath(props.images.geology)
    showImage();
  }

  function showImage() {
    setShowSurfaceImage(true);
  }

  function hideImage() {
    setShowSurfaceImage(false);
  }

  return (
    <div>
      <nav className="planet-card__nav">
        <ul>
          <li><a onClick={showOverview}>Overview</a></li>
          <li><a onClick={showStructure}>Structure</a></li>
          <li><a onClick={showSurface}>Surface</a></li>
        </ul>
      </nav>

      <main className="planet-card__main">
        <div className="planet-image-container" style={{ backgroundImage: `url(${imageUrl})`, width: `${planetSize}%` }}></div>
        { showSurfaceImage ? <img src={imageSurfacePath} alt="surface planet" /> : null }
        <h2>{name}</h2>
        <p>{text}</p>
        <p>Source: <a href={wikipediaUrl}>Wikipedia</a></p>
      </main>
    </div>
    )
}

function CardInfoList(props) {
  
  return (
    <ul className="planet-card__info">
      <InfoListItem name="rotation time" value={props.planet.rotation} />
      <InfoListItem name="revolution time" value={props.planet.revolution} />
      <InfoListItem name="radius" value={props.planet.radius} />
      <InfoListItem name="average temp." value={props.planet.temperature} />
    </ul>
  )
}

function InfoListItem(props) {
  return (
    <li>
      <span>{props.name}</span>
      <sapn>{props.value}</sapn>
    </li>
  )
}


export default PlanetCard;