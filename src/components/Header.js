import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

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

  function closeMenu() {
    props.closeMenu();
  }

  return (
    <nav id="main-nav">
      <ul>
        <li><Link to="/mercury" onClick={closeMenu}>Mercury</Link></li>
        <li><Link to="/venus" onClick={closeMenu}>Venus</Link></li>
        <li><Link to="/earth" onClick={closeMenu}>Earth</Link></li>
        <li><Link to="/mars" onClick={closeMenu}>Mars</Link></li>
        <li><Link to="/jupiter" onClick={closeMenu}>Jupiter</Link></li>
        <li><Link to="/saturn" onClick={closeMenu}>Saturn</Link></li>
        <li><Link to="/uranus" onClick={closeMenu}>Uranus</Link></li>
        <li><Link to="/neptune" onClick={closeMenu}>Neptune</Link></li>
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