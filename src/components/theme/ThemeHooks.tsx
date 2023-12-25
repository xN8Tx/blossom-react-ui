import { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

import type { ThemeType } from './Theme.types';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return {
    theme: theme,
    setTheme: (newTheme: ThemeType) => {
      if (theme !== newTheme) {
        setTheme(newTheme);
      }
    },
  };
};
