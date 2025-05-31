// src/components/ThemeToggle.jsx
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDarkMode ? "Light mode" : "Dark mode"}
        >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
};

export default ThemeToggle;
