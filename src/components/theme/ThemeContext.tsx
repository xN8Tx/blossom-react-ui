import React, { createContext, useEffect, useState } from 'react';

import { ThemeContextType, ThemeProviderPropsType } from './Theme.types';
import { getTheme } from './Theme.utils';

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export const ThemeProvider = ({
  children,
  colorTheme,
}: ThemeProviderPropsType) => {
  const selectedTheme = colorTheme ? getTheme(colorTheme) : getTheme();
  const [theme, setTheme] = useState(selectedTheme);

  // Special for storybook work
  useEffect(() => {
    setTheme(colorTheme!);
  }, [colorTheme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
