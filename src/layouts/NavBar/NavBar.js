import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const links = ["MY STORY", "EXPERIENCE", "PROJECTS", "CONTACT"];

function NavBar() {
  const [dropdownIsOpen, setdropdownIsOpen] = useState(false);
  // const hamburgerOnClick = () => {
  //   if (!dropdownIsOpen) {
  //     console.log("opening dropdown");
  //     setdropdownIsOpen(true);
  //   }
  // }
  useEffect(() => {
    function handleWindowClick(event) {
      if (event.target.id === "hamburger-icon" || event.target.parentNode.id === "hamburger-icon" || dropdownIsOpen) {
        setdropdownIsOpen(() => !dropdownIsOpen);
      }
    };
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    }
  }, [dropdownIsOpen]);

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
          <MenuRoundedIcon className="hamburger-icon" id="hamburger-icon" />
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