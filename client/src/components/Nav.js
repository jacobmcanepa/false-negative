import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
    <section className='nav-section'>
      <Link to='/'>
        <div className='hamburger'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
      <nav>
        <div>
          <ul>
            <li><NavLink to='/shop'>Shop</NavLink></li>
            <li><NavLink to='/news'>News</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </section>
    </>
  );
};

export default Nav;