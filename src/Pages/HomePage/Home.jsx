import Hero from "../HeroPage/Hero";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";

import "./Home.css";

function Home() {
  return (
    <div className="home_container">
      <Hero />
      <PortfolioSection />
    </div>
  );
}

export default Home;
