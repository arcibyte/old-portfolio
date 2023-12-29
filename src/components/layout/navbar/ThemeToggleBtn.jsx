import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useLocalStorage from "../../../hooks/useLocalStorage";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    applyTheme(newDarkMode);
    setIsAnimating(true);

    // Después de un tiempo, desactiva la animación
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const applyTheme = (darkMode) => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);

    const body = document.body;
    body.style.backgroundColor = darkMode ? "#111010" : "#FFFEF4";
  };

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      setIsDarkMode(event.matches);
      applyTheme(event.matches);
    };

    darkModeQuery.addEventListener("change", handleChange);

    // Aplicar el tema cuando el componente se carga
    applyTheme(isDarkMode);

    return () => {
      darkModeQuery.removeEventListener("change", handleChange);
    };
  }, [isDarkMode, setIsDarkMode]);

  return (
    <motion.button
  className={`backdrop-blur-md bg-gradient-to-r from-iris/60 to-surface/60 dark:from-iris/80 dark:to-surface/80 px-2 py-1 rounded-md border border-neutral-800 dark:border-neutral-300 focus:outline-none text-xl`}
  whileTap={{ scale: 0.95 }}
  initial={{ scale: 1 }}
  animate={{ scale: isAnimating ? 1.1 : 1 }}
  onClick={toggleDarkMode}
  aria-label={isDarkMode ? "Desactivar modo oscuro" : "Activar modo oscuro"}
>
  {isDarkMode ? <>🌝</> : <>🌞</>}
</motion.button>
  );
};

export default ThemeToggleButton;
