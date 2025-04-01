import { createContext, useContext, useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
      <motion.button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-dark-card dark:bg-light-card text-dark-text dark:text-light-text shadow-lg backdrop-blur-sm border border-dark-border dark:border-light-border hover:shadow-glow transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>
    </ThemeContext.Provider>
  );
}; 