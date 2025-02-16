"use client";

import { useTheme } from "../context/ModContext";
import Nav from "./Nav";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="header">
      <h1>Jobbportal</h1>
      <Nav />
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? "🌞 Ljusläge" : "🌙 Mörkläge"}
      </button>
    </header>
  );
}

