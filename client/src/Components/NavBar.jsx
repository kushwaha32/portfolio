import avatar from "../img/raj_img.jpg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import authContext from "../Context/auth/authContext";

const NavBar = () => {
  const getAuthContext = useContext(authContext);
  const { isAuthenticated, logout } = getAuthContext;

  const Logout = () => {
    logout();
  };

  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt={avatar} />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="nav-item">
              <NavLink to="/portfolio/create" exact activeClassName="active">
                Create Portfolio
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li className="nav-item">
              <NavLink to="/messagess" exact activeClassName="active">
                Messagess
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li className="nav-item">
              <Link to="" onClick={Logout}>Logout</Link>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink to="/login" exact activeClassName="active">
                Login
              </NavLink>
            </li>
          )}
        </ul>
        <footer className="footer">
          <p>@2021</p>
        </footer>
      </nav>
    </div>
  );
};

export default NavBar;
