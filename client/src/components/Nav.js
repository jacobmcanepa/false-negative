import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [showNavigation, setShowNavigation] = useState(false);

  function toggleNavigation() {
    setShowNavigation((prev) => !prev);
  }

  return (
    <>
      <button className="navigation-toggle" onClick={toggleNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`navigation ${showNavigation ? "visible" : ""}`}>
        <ul>
          <li>
            <NavLink to='/shop' className='link' onClick={toggleNavigation}>Shop</NavLink>
          </li>
          <li>
            <NavLink to='/news' className='link' onClick={toggleNavigation}>News</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='link' onClick={toggleNavigation}>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='link' onClick={toggleNavigation}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
