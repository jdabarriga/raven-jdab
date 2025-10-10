import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { Palette } from '@mui/icons-material';

const ThemeSwitcher = () => {
  const { theme, themeName, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeNames = {
    midnightRaven: 'Midnight Raven',
    shadowRaven: 'Shadow Raven',
    obsidianRaven: 'Obsidian Raven',
  };

  return (
    <div className="absolute bottom-4 left-4 z-50">
      {isOpen && (
        <div className="mb-2 rounded-lg shadow-lg p-2" style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          border: '1px solid var(--border-primary)' 
        }}>
          {availableThemes.map((name) => (
            <button
              key={name}
              onClick={() => {
                setTheme(name);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded transition-colors font-medium ${
                themeName === name ? 'font-bold' : ''
              }`}
              style={{ 
                color: 'var(--text-primary)',
                backgroundColor: themeName === name ? 'var(--accent)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (themeName !== name) {
                  e.target.style.backgroundColor = 'var(--border-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (themeName !== name) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              {themeNames[name]}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg transition-all hover:scale-110"
        style={{ 
          color: 'var(--accent)',
          backgroundColor: 'transparent',
        }}
        title="Change Theme"
        onMouseEnter={(e) => {
          e.target.style.color = 'var(--accent-hover)';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'var(--accent)';
        }}
      >
        <Palette fontSize="large" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
