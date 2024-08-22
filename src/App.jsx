import { useContext, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import NavShowContext from "./context/NavShowContext";
import Home from "./Pages/HomePage/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Service from "./Pages/ServicePage/Service";
import About from "./Pages/AboutPage/About";
import BlogPage from "./Pages/Blogs/BlogPage";
import BlogContent from "./Pages/BlogContent/BlogContent";

import "./App.css";

function App() {
  const { showNav } = useContext(NavShowContext);

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogContent />} />
      </Routes>
    </>
  );
}

export default App;
