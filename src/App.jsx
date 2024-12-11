import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavShowContext from "./context/NavShowContext";
import Home from "./Pages/HomePage/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Service from "./Pages/ServicePage/Service";
import About from "./Pages/AboutPage/About";
import BlogPage from "./Pages/Blogs/BlogPage";
import BlogContent from "./Pages/BlogContent/BlogContent";
import PortfolioProject from "./Pages/PortfolioProject/PortfolioProject";
import ReactGA from "react-ga4";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Privacy from "./Pages/Privacy/Privacy";
import "./App.css";

ReactGA.initialize("your GA measurement id");
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
        <Route path="/portfolio/:id" element={<PortfolioProject />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogContent />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
