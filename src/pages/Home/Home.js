import './Home.css';
import torsoShot from '../../assets/photos/torso-shot-cello-3.png';
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
          <img src={torsoShot} alt="Daniel Tressel" />
        </div>
      </div>
    </>
  )
}

export default Home;