import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('light');
  const [font, setFont] = useState('seriff');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const changeFont = (selectedFont) => {
    setFont(selectedFont);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const rootElement = document.querySelector('body');
    rootElement.classList.remove('light', 'dark');
    rootElement.classList.add(theme);
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme , changeFont, font}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
