import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Import de mes Pages
import Home from "./page/Home";
import Projects from "./page/Projects";

// Import de mes Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <button
        className="mode"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Mode
      </button>
      <Header title="Mon Portfolio" darkMode={darkMode} />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
