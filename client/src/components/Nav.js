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
        {/* <div className="navigation-close" onClick={toggleNavigation}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div> */}
        <ul>
          <li>
            <NavLink to='/shop' className='link'>Shop</NavLink>
          </li>
          <li>
            <NavLink to='/news' className='link'>News</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='link'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='link'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
