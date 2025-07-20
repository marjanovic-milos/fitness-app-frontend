"use client";
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedDark = localStorage.getItem("dark");
    const storedLang = localStorage.getItem("language");

    if (storedDark !== null) {
      setDark(storedDark === "true");
    }

    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("dark", newDark);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <ThemeContext.Provider
      value={{ dark, toggleTheme, language, changeLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
