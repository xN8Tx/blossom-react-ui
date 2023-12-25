import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { ThemeProvider } from './ThemeContext';
import { useTheme } from './ThemeHooks';

const TestComponent = () => {
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

describe('Theme test', () => {
  it('Should be light', () => {
    render(
      <ThemeProvider colorTheme='light'>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('Should be dark', () => {
    render(
      <ThemeProvider colorTheme='dark'>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('Should be set to light', async () => {
    render(
      <ThemeProvider colorTheme='dark'>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme').textContent).toBe('dark');
    await act(async () => {
      await userEvent.click(screen.getByTestId('setLight'));
    });
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('Should be set to dark', async () => {
    render(
      <ThemeProvider colorTheme='light'>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme').textContent).toBe('light');
    await act(async () => {
      await userEvent.click(screen.getByTestId('setDark'));
    });
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });
});
