import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const links = ["MY STORY", "EXPERIENCE", "PROJECTS", "CONTACT"];

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
          >HOME</Link>
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
          {/* <div className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>  
          </div>  */}
        </div>
        <div className='dropdown-container'>
          {links.map((link) => (
            <Link
              className={`dropdown-link${dropdownIsOpen ? ' dropdown-link-show' : ''}`}
              to={`/${link.toLowerCase().split(' ').join('-')}`}
              key={link}
            >{link}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar;