import { Routes, Route } from "react-router-dom";
import Hero from "../src/Pages/HeroPage/Hero";
import NavBar from "../src/Components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
