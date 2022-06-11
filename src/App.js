import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HealthCoach from "./components/HealthCoach";
import Home from "./components/Home";
import Khushboo from "./components/Khushboo";
import MainHome from "./components/MainHome";
import MicroTech from "./components/MicroTech";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainHome></MainHome>}></Route>
        <Route path="/microTech" element={<MicroTech></MicroTech>}></Route>
        <Route path="/khushboo" element={<Khushboo></Khushboo>}></Route>
        <Route path="/healthCoach" element={<HealthCoach></HealthCoach>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>

    </div>
  );
}

export default App;
