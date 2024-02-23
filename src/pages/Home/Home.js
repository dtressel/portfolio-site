import './Home.css';
import standCello from '../../assets/photos/stand-cello-transparent5.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  return (
    <>
      <div className="Home-top-container">
        <div className="Home-left-container">
          <div>
            <h1>Daniel Tressel</h1>
            <h2>Front-End Developer</h2>
            <h3>Specializing in React, JavaScript, and CSS</h3>
            <a href="https://www.linkedin.com/in/daniel-tressel/" target="_blank" rel="noreferrer" >
              <LinkedInIcon className="Home-body-icon" />
            </a>
            <a href="https://github.com/dtressel" target="_blank" rel="noreferrer" >
              <GitHubIcon className="Home-body-icon" />
            </a>
          </div>
        </div>
        <div className="Home-right-container">
          <div className="Home-image-container">
            <img src={standCello} alt="Daniel Tressel" className="Home-photo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;