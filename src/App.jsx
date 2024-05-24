import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavShowContext from "./context/NavShowContext";
import Home from "./Pages/HomePage/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Service from "./Pages/ServicePage/Service";
import About from "./Pages/AboutPage/About";
import NavBar from "./Components/NavBar/NavBar";
// import BurgerMenu from "../OpenBurgerMenu/BurgerMenu";

import "./App.css";
import BurgerMenu from "../src/Components/OpenBurgerMenu/BurgerMenu";

function App() {
  // const { showNav } = useContext(NavShowContext);
  // const { hideNav } = useContext(NavShowContext);
  return (
    <>
      {/* {hideNav && <NavBar />}

      {showNav && <BurgerMenu />} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
