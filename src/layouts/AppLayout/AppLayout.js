import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import './AppLayout.css';

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default AppLayout;