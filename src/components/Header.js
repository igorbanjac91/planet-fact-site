import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {


  useEffect(() => {
    
    
  })

  const [isActive, setIsActive] = useState(false)
  
  function toggleMenu() {
    const menu = document.getElementById("main-nav");
    if (isActive) {
      menu.classList.remove("show-menu")
      setIsActive(false);
    } else {
      menu.classList.add("show-menu")
      setIsActive(true);
    }
  }
  
  function closeMenu() {
    const menu = document.getElementById("main-nav");
    menu.classList.remove("show-menu")
    setIsActive(false);
  }

  return ( 
    <header className="main-header">
      <div className="main-header__header">
        <h1>THE PLANETS</h1>
        <BurgerIcon toggleMenu={toggleMenu}/>
      </div>
      <Nav closeMenu={closeMenu}/>
    </header>
  )
}


function Nav(props) {

  function closeMenu(e) {
    setBorderColor(e)
    props.closeMenu();
  }

  function setBorderColor(event) {
    let links = document.querySelectorAll(".link-page")
    Array.from(links).forEach((elm, index) => {
      if ( elm === event.target) {
        elm.setAttribute("id",`border-${index}`)
      } else {
        elm.removeAttribute("id", `border-${index}`)
      }
    } ) 
  }

  return (
    <nav id="main-nav">
      <ul>
        <li><Link to="/mercury" className="link-page" onClick={closeMenu}>Mercury</Link></li>
        <li><Link to="/venus" className="link-page" onClick={closeMenu}>Venus</Link></li>
        <li><Link to="/earth" className="link-page" onClick={closeMenu}>Earth</Link></li>
        <li><Link to="/mars" className="link-page" onClick={closeMenu}>Mars</Link></li>
        <li><Link to="/jupiter" className="link-page" onClick={closeMenu}>Jupiter</Link></li>
        <li><Link to="/saturn" className="link-page" onClick={closeMenu}>Saturn</Link></li>
        <li><Link to="/uranus" className="link-page" onClick={closeMenu}>Uranus</Link></li>
        <li><Link to="/neptune" className="link-page" onClick={closeMenu}>Neptune</Link></li>
      </ul>
    </nav>
  )
}


function BurgerIcon(props) {

  function toggleMenu() {
    props.toggleMenu()
  }

  return (
    <svg onClick={toggleMenu} className="burger-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
  )
}

export default Header;