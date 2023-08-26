import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Import de mes Pages
import Home from "./page/Home";
import Projects from "./page/Projects";

// Import de mes Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(Cookies.get("mode") || false);

  const handleMode = (mode) => {
    if (mode) {
      Cookies.set("mode", mode, { expires: 15 });
      setDarkMode(mode);
    } else {
      Cookies.remove("mode");
      setDarkMode(false);
    }
  };

  return (
    <Router>
      <Header
        title="Mon Portfolio"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleMode={handleMode}
      />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
      </Routes>

      <Footer darkMode={darkMode} />
    </Router>
  );
};

export default App;
