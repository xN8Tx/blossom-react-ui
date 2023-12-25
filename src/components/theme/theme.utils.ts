import { ThemeType } from './theme.types';

const getTheme = (colorTheme?: ThemeType) => {
  const localStorageTheme = localStorage.getItem('theme');

  const isThemeCorrect =
    localStorageTheme === 'dark' || localStorageTheme === 'light';

  if (isThemeCorrect) {
    return localStorageTheme;
  }

  const isWindowMatchMedia = window.matchMedia !== undefined;

  const isThemeByDefaultDark =
    isWindowMatchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (colorTheme) return colorTheme;
  if (isThemeByDefaultDark) return 'dark';
  return 'light';
};

export { getTheme };
