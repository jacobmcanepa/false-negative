import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header>
      <label for='trigger'>
      <input type="checkbox" className='trigger' 
        id='trigger' checked={menuOpen} onChange={toggleMenu}
      />
      <nav>
        <ul>
          <li><NavLink to='/shop' onClick={handleLinkClick}>Shop</NavLink></li>
          <li><NavLink to='/news' onClick={handleLinkClick}>News</NavLink></li>
          <li><NavLink to='/about' onClick={handleLinkClick}>About</NavLink></li>
          <li><NavLink to='/contact' onClick={handleLinkClick}>Contact</NavLink></li>
        </ul>
      </nav>
      <div className='hamburger'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </label>
    </header>
  );
};

export default Nav;