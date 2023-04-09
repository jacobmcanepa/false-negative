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
        <img src={require('.//images/FN.png')} alt="FN" className="nav-img"/>
      </button>
      <nav className={`navigation ${showNavigation ? "visible" : ""}`}>
        <ul>
          <li>
            <NavLink to='/shop' className='link' onClick={toggleNavigation}>
              <img src={require('.//images/SHOP.png')} alt="shop" />
            </NavLink>
          </li>
          <li>
            <NavLink to='/news' className='link' onClick={toggleNavigation}>
              <img src={require('.//images/NEWS.png')} alt="news" />
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='link' onClick={toggleNavigation}>
              <img src={require('.//images/ABOUT.png')} alt="about" />
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='link' onClick={toggleNavigation}>
              <img src={require('.//images/CONTACT.png')} alt="contact" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
