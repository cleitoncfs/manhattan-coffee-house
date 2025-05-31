// src/hooks/useTheme.js
import { useState } from "react";

export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
    };

    return { isDarkMode, toggleTheme };
};
