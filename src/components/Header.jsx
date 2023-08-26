import { useNavigate } from "react-router-dom";

const Header = ({ title, darkMode, setDarkMode, handleMode }) => {
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
            handleMode(!darkMode);
            // setDarkMode(!darkMode);
            // Cookies.set("mode", darkMode, { expires: 15 });
          }}
        >
          <i className="fa-solid fa-sun"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
