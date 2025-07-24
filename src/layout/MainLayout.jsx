import AsideLeft from "../components/AsideLeft";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <AsideLeft/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
