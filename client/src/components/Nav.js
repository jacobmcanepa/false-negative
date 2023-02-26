import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
    <nav>
      <div>
        <Link to='/'>Logo</Link>
      </div>
      <div>
        <ul>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Nav;