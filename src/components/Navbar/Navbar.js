import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react'
import './navbar.scss'
import { ThemeContext } from 'styled-components';
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const themeContext = useContext(ThemeContext);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const { t } = useTranslation();
  if (window.location.pathname === "/login") return null;
  else {
    return (
      <div>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink
              exact
              to="/"
              className="nav-logo"
              style={{ color: themeContext.color }}
            >
              Taheera Ahmed
              <i className="fa fa-code"></i>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeclassname="active"
                  className="nav-links"
                  style={{ color: themeContext.color }}
                  onClick={click ? handleClick : null}
                >
                  {t("common.home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeclassname="active"
                  className="nav-links"
                  style={{ color: themeContext.color }}
                  onClick={click ? handleClick : null}
                >
                  {t("common.aboutme")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/cv"
                  activeclassname="active"
                  className="nav-links"
                  style={{ color: themeContext.color }}
                  onClick={click ? handleClick : null}
                >
                  Cv
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/projects"
                  activeclassname="active"
                  className="nav-links"
                  style={{ color: themeContext.color }}
                  onClick={click ? handleClick : null}
                >
                  {t("common.projects")}
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <Hamburger toggled={click} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
}

export default Navbar
