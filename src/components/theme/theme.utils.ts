import { ThemeType } from './Theme.types';

const getTheme = (colorTheme?: ThemeType) => {
  const localStorageTheme = localStorage.getItem('theme');

  const isThemeCorrect =
    localStorageTheme === 'dark' || localStorageTheme === 'light';

  if (isThemeCorrect) {
    return localStorageTheme;
  }

  const isColorTheme = colorTheme === 'dark' || colorTheme === 'light';
  if (isColorTheme) return colorTheme;

  const isWindowMatchMedia = window.matchMedia !== undefined;
  const isThemeByDefaultDark =
    isWindowMatchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isThemeByDefaultDark) return 'dark';
  return 'light';
};

export { getTheme };
