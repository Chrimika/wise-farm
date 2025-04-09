import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Meteo } from "./pages/Meteo";
import { Landing } from "./pages/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Meteo />} />
          <Route path="/contact" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
