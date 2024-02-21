import { Link, useLocation } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './BottomNavigation.css';

const pages = ["/", "/my-story", "/experience", "/projects", "/contact"];
const pagesNames = {
  "/": "Home",
  "/my-story": "My Story",
  "/experience": "Experience",
  "/projects": "Projects",
  "/contact": "Contact"
};

const BottomNavigation = () => {
  const location = useLocation();

  const currPageIndex = pages.indexOf(location.pathname);
  const nextPagePath = pages[currPageIndex + 1];
  const previousPagePath = pages[currPageIndex - 1];
  const nextPageName = pagesNames[nextPagePath];
  const previousPageName = pagesNames[previousPagePath];

  return (
    <div className="BottomNavigation-container">
      <div className="BottomNavigation-left">
        {previousPagePath && 
          <Link
            className="BottomNavigation-link"
            to={previousPagePath}
          >
            <ArrowBackIosIcon />
            <span>{previousPageName}</span>
          </Link>
        }
      </div>
      <div className="BottomNavigation-right">
        {nextPagePath && 
          <Link
            className="BottomNavigation-link"
            to={nextPagePath}
          >
            <span>{nextPageName}</span>
            <ArrowForwardIosIcon />
          </Link>
        }
      </div>
    </div>
  )
}

export default BottomNavigation;