"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// 🛠 Skapa en kontext för temat
const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 🌍 Hämta sparat dark mode från localStorage efter att komponenten monterats
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  // 🔄 Uppdatera localStorage & body class när dark mode ändras
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("darkMode", darkMode.toString());

      // 🛠 Lägg till/ta bort klassen på <body>
      if (darkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  if (!isMounted) return null; // Förhindra hydration-fel

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
}

// 🎯 Hook för att använda temat
export function useTheme() {
  return useContext(ThemeContext);
}


{/*"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// 🛠 Skapa en kontext för temat
const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // 🔴 Ny state för att undvika hydration-problem

  // 🌍 Hämta sparat dark mode från localStorage efter att komponenten monterats
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  // 🔄 Uppdatera localStorage varje gång dark mode ändras
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // 🚨 Vänta på att klienten monteras innan vi visar children
  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
}

// 🎯 Hook för att använda temat
export function useTheme() {
  return useContext(ThemeContext);
} */}

