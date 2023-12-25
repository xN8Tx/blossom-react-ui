import React from 'react';

import { useTheme } from '../components';

const ThemeMock = () => {
  const { theme, setTheme } = useTheme();

  const onClickHandler = (newTheme: typeof theme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <p data-testid='theme'>{theme}</p>
      <button data-testid='setDark' onClick={() => onClickHandler('dark')}>
        Dark
      </button>
      <button data-testid='setLight' onClick={() => onClickHandler('light')}>
        Light
      </button>
    </>
  );
};

export { ThemeMock };
