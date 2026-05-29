import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

import GameWebshop from "./pages/GameWebshop";
import CodeExchange from "./pages/codeExchange";
import Elections from "./pages/Elections";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function Home() {
  
  return (
    <>
    <Hero />
    <About />
    <Projects />
    <Contact />
    </>
  );

}

function App() {

  return (

    <BrowserRouter>

      <AnimatedRoutes />

    </BrowserRouter>

  );

}

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Home />} />

        <Route
          path="/gamewebshop"
          element={<GameWebshop />}
        />

        <Route
          path="/elections"
          element={<Elections />}
        />

        <Route
          path="/codeexchange"
          element={<CodeExchange />}
        />

      </Routes>

    </AnimatePresence>

  );

}

export default App;