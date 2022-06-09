import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <MyWork></MyWork>
      <Contact></Contact>
    </div>
  );
}

export default App;
