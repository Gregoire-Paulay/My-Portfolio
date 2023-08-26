import { useNavigate } from "react-router-dom";

const Header = ({ title, darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  return (
    <header className={darkMode ? "dark" : "light"}>
      <div className="container">
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          {title}
        </h1>
        <button
          className={darkMode ? "mode-dark" : "mode-light"}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <i className="fa-solid fa-sun"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
