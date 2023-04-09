import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
        <div className="flex-center header">
          <NavLink to='/' className="header-link">
            <img src={require('.//images/False.png')} alt="" className="header-img"/>
          </NavLink>
          <NavLink to='/' className="header-link">
            <img src={require('.//images/negative.png')} alt="" className="header-img"/>
          </NavLink>
        </div>
        </>
    );
};

export default Header;