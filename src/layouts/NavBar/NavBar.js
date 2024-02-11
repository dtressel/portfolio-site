import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const links = ["My Story", "Experience", "Projects", "Contact"];

function NavBar() {
  const [dropdownIsOpen, setdropdownIsOpen] = useState(false);
  const hamburgerOnClick = () => {
    setdropdownIsOpen((dropdownIsOpen) => !dropdownIsOpen);
  }

  return (
    <div className="navbar-wrapper">
      <div className="navbar-content-container">
        <div className="navbar-left-side">
          <Link
            className="navbar-link"
            to='/'
          >Home</Link>
        </div>
        <div className="navbar-right-side">
          {links.map((link) => (
            <Link
              className="navbar-link"
              to={`/${link.toLowerCase().split(' ').join('-')}`}
              key={link}
            >{link}</Link>
          ))}
          <MenuRoundedIcon className="hamburger-icon" onClick={hamburgerOnClick} />  
        </div>
        {dropdownIsOpen &&
          <div className="dropdown-container">
            {links.map((link) => (
              <div className="dropdown-link-container">
                <Link
                  className="dropdown-link"
                  to={`/${link.toLowerCase().split(' ').join('-')}`}
                  key={link}
                >{link}</Link>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default NavBar;