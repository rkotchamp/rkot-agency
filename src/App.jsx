import { useContext, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import NavShowContext from "./context/NavShowContext";
import Home from "./Pages/HomePage/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Service from "./Pages/ServicePage/Service";
import About from "./Pages/AboutPage/About";
import Blogs from "./Pages/Blogs/BlogPage";
// import BurgerMenu from "../OpenBurgerMenu/BurgerMenu";

import "./App.css";
import BurgerMenu from "../src/Components/OpenBurgerMenu/BurgerMenu";
import BlogPage from "./Pages/Blogs/BlogPage";

function App() {
  const { showNav } = useContext(NavShowContext);

  // const { hideNav } = useContext(NavShowContext);

  useEffect(() => {
    if (showNav) {
      document.body.classList.add("burger-menu-open");
      document.body.classList.remove("burger-menu-closed");
    } else {
      document.body.classList.add("burger-menu-closed");

      document.body.classList.remove("burger-menu-open");
    }
  }, [showNav]);

  return (
    <>
      {/* {hideNav && <NavBar />}

      {showNav && <BurgerMenu />} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
