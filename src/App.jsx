import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
