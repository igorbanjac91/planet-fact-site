import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="main-header">
      <div className="main-header__header">
        <h1>THE PLANETS</h1>
        <BurgerIcon />
      </div>
      <Nav />
    </header>
  )
}


function Nav() {

  return (
    <nav id="main-nav">
      <ul>
        <li><Link to="/mercury">Mercury</Link></li>
        <li><Link to="/venus">Venus</Link></li>
        <li><Link to="/earth">Earth</Link></li>
        <li><Link to="/mars">Mars</Link></li>
        <li><Link to="/jupiter">Jupiter</Link></li>
        <li><Link to="/saturn">Saturn</Link></li>
        <li><Link to="/uranus">Uranus</Link></li>
        <li><Link to="/neptune">Neptune</Link></li>
      </ul>
    </nav>
  )
}


function BurgerIcon(props) {

  const [isActive, setIsActive] = useState(false)
  
  function toggleMenu() {
    const menu = document.getElementById("main-nav");
    if (isActive) {
      menu.classList.remove("show-menu")
      setIsActive(!isActive);
    } else {
      menu.classList.add("show-menu")
      setIsActive(!isActive);
    }
  }

  return (
    <svg onClick={toggleMenu} className="burger-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
  )
}

export default Header;