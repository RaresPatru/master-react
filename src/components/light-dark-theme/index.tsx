import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const LightDarkMode: React.FC = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello, World!</p>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
