import { useNavigate } from "react-router-dom";

const Header = ({ title, darkMode }) => {
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
      </div>
    </header>
  );
};

export default Header;
