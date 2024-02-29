import NavBar from "../NavBar";
import Footer from "../Footer";
import BottomNavigation from "../BottomNavigation";
import Technologies from "../Technologies";
import { Outlet, useLocation } from "react-router-dom";
import './AppLayout.css';

const AppLayout = () => {
  const location = useLocation();
  let includeTechnologies = false;
  if (['/experience', '/projects'].includes(location.pathname)) {
    includeTechnologies = true;
  }

  return (
    <div className="page-container">
      <NavBar />
      <main>
        {includeTechnologies && <Technologies />}
        <Outlet />
      </main>
      <BottomNavigation />
      <Footer />
    </div>
  )
}

export default AppLayout;