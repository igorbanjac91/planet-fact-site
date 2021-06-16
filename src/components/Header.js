import React, { useState } from "react";

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

  // const [isActive, setIsActive] = useState("false")

  // function toggleMenu() {
  //   setIsActive(!isActive);
  // }


  return (
    <nav id="main-nav">
      <ul>
        <li><a href="">Mercury</a></li>
        <li><a href="">Venus</a></li>
        <li><a href="">Earth</a></li>
        <li><a href="">Mars</a></li>
        <li><a href="">Jupiter</a></li>
        <li><a href="">Saturn</a></li>
        <li><a href="">Uranus</a></li>
        <li><a href="">Neptune</a></li>
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
    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
  )
}

export default Header;