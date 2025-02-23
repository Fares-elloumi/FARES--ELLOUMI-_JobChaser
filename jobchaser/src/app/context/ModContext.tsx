"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Skapa en kontext för temat
const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Hämta sparat dark mode från localStorage
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  // Uppdatera localStorage när dark mode ändras
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("darkMode", darkMode.toString());

      if (darkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  if (!isMounted) return null; 

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
}

// Hook för att använda temat
export function useTheme() {
  return useContext(ThemeContext);
}


