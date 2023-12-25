type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

type ThemeProviderPropsType = {
  children: React.ReactNode;
  colorTheme?: ThemeType;
};

export type { ThemeType, ThemeContextType, ThemeProviderPropsType };
