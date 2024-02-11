import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-links"></div>
      <div className="Footer-social-links"></div>
      <div className="Footer-copyright">
        <div>&copy; 2023 Daniel Tressel. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer;