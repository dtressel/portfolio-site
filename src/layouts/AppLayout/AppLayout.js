import NavBar from "../NavBar";
import Footer from "../Footer";
import BottomNavigation from "../BottomNavigation";
import { Outlet } from "react-router-dom";
import './AppLayout.css';

const AppLayout = () => {
  return (
    <div className="page-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <BottomNavigation />
      <Footer />
    </div>
  )
}

export default AppLayout;