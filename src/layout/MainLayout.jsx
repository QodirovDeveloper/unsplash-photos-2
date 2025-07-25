import AsideLeft from "../components/AsideLeft";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search"; // <-- Search import qiling
import { Outlet } from "react-router-dom";

function MainLayout() {


  return (
    <>
      <Navbar />
      <AsideLeft />
        <Search  />
        <main>
          <Outlet  />
        </main>
      <Footer />
    </>
  );
}

export default MainLayout;
