import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, defaultTheme } from './colors';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Load theme from localStorage or use default
    const saved = localStorage.getItem('ravenTheme');
    return saved || defaultTheme;
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('ravenTheme', currentTheme);
    
    // Apply theme to document root
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty('--bg-primary', theme.background);
    document.documentElement.style.setProperty('--bg-secondary', theme.reactFlow);
    document.documentElement.style.setProperty('--border-primary', theme.border);
    document.documentElement.style.setProperty('--border-secondary', theme.outerBorder);
    document.documentElement.style.setProperty('--accent', theme.accent);
    document.documentElement.style.setProperty('--accent-hover', theme.accentHover);
    document.documentElement.style.setProperty('--text-primary', theme.text);
    document.documentElement.style.setProperty('--text-secondary', theme.textSecondary);
    document.documentElement.style.setProperty('--edge-color', theme.edgeColor);
  }, [currentTheme]);

  const value = {
    theme: themes[currentTheme],
    themeName: currentTheme,
    setTheme: setCurrentTheme,
    availableThemes: Object.keys(themes),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
