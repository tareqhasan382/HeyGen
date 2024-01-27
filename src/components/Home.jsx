import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  // #a7a6ee  cacaf6
  return (
    <div className=" bg-[#e0e3e6] h-full ">
      <div className=" shadow sticky bg-[#e0e3e6] top-0 z-50 ">
        <Navbar />
      </div>

      <div className="px-5 max-w-[1280px] mx-auto">
        <Outlet></Outlet>
      </div>
      <div className=" bg-slate-900 items-end ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
