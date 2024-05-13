import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavShowContext from "./context/NavShowContext";
import Home from "./Pages/HomePage/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
// import BurgerMenu from "../OpenBurgerMenu/BurgerMenu";

import "./App.css";
import BurgerMenu from "../src/Components/OpenBurgerMenu/BurgerMenu";

function App() {
  // const { showNav } = useContext(NavShowContext);
  // const { hideNav } = use Context(NavShowContext);
  return (
    <>
      {/* {hideNav && <NavBar />} */}

      {/* {showNav && <BurgerMenu />} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
