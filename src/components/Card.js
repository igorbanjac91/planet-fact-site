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
  const [color, setColor] = useState(props.planet.color)
  const [size, setSize] = useState(props.planet.size)
  const [toggleOverview, setToggleOverview] = useState(false)
  const [toggleStructure, setToggleStructure] = useState(false)
  const [toggleSurface, setToggleSurface] = useState(false)
  const [navItemStyle, setNavItemStyle] = useState( { borderBottom: `3px solid ${color}`, color: "#fff" })
  const [windowSize, setWindowSize] = useState(window.innerWidth) 

  useEffect(() => {
    showOverview();

    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth)
    })

    if (windowSize < 600) {
      setBorderColor(color)
      resetNavValues()
    } else {
      setBackgroundColor(color)
      changeNavValues()
    }
  
    return () => {
      window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth)
      })
    }

  }, [props.name, windowSize, color])

  function showOverview() {
    setName(props.name);
    setText(props.overview.content);
    setImageUrl(props.images.planet);
    setWikipediaUrl(props.overview.source);
    setSize(props.planet.size)
    setColor(props.planet.color)
    hideImage();
    setToggleOverview(true)
    setToggleStructure(false)
    setToggleSurface(false)
  }
  
  function showStructure() {
    setText(props.planet.structure.content);
    setImageUrl(props.images.internal);
    setWikipediaUrl(props.planet.structure.source);
    hideImage()
    setToggleStructure(true)
    setToggleOverview(false)
    setToggleSurface(false)
  }

  function showSurface() {
    setText(props.planet.geology.content);
    setWikipediaUrl(props.planet.geology.source);
    setImageUrl(props.images.planet);
    setImageSurfacePath(props.images.geology)
    showImage();
    setToggleSurface(true)
    setToggleStructure(false)
    setToggleOverview(false)
  }

  function showImage() {
    setShowSurfaceImage(true);
  }

  function hideImage() {
    setShowSurfaceImage(false);
  }
    
  function setBackgroundColor(color) {
    setNavItemStyle( { backgroundColor: `${color}` } )
  }

  function setBorderColor(color) {
    setNavItemStyle( { borderBottom: `3px solid ${color}`, color: "#fff" } )
  }

  function changeNavValues() {
    let structure = document.querySelector("#structureItem");    
    let surface = document.querySelector("#surfaceItem");
    structure.childNodes[1].nodeValue = "iternal structure";
    surface.childNodes[1].nodeValue = "surface geology";
  }

  function resetNavValues() {
    let structure = document.querySelector("#structureItem");    
    let surface = document.querySelector("#surfaceItem");
    structure.childNodes[1].nodeValue = "structure";
    surface.childNodes[1].nodeValue = "geology";
  }

  console.log(imageUrl)
  return (
    <div className="planet-card__container">
      <nav className="planet-card__nav">
        <ul>
          <li>
            <button onClick={showOverview} id="overviewItem" style={ toggleOverview ? navItemStyle : null }>
              <span className="hide">01</span>
              Overview
            </button>
          </li>
          <li>
            <button onClick={showStructure} id="structureItem" style={ toggleStructure ? navItemStyle : null }>
              <span className="hide">02</span>
              Structure
            </button>
          </li>
          <li>
            <button onClick={showSurface} id="surfaceItem" style={ toggleSurface ? navItemStyle : null }>
              <span className="hide">03</span>
              Surface
            </button>
          </li>
        </ul>
      </nav>
      <div className="planet-image-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl.substring(1)})`, width: `${size}%` }}>
        { showSurfaceImage ? <img className="surface-image" src={`${process.env.PUBLIC_URL}${imageSurfacePath.substring(1)}`} alt="surface planet" /> : null }
      </div>
      <main className="planet-card__main">
        <h2>{name}</h2>
        <p>{text}</p>
        <span>Source: <a href={wikipediaUrl}>Wikipedia</a></span>
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
      <span className="info-value" >{props.value}</span>
    </li>
  )
}


export default PlanetCard;