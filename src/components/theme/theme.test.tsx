import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { ThemeProvider } from './ThemeContext';
import { ThemeMock } from '../../test/components/theme.mock';

describe('Theme test', () => {
  it('Should be light', () => {
    render(
      <ThemeProvider colorTheme='light'>
        <ThemeMock />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('Should be dark', () => {
    render(
      <ThemeProvider colorTheme='dark'>
        <ThemeMock />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('Should be set to light', async () => {
    render(
      <ThemeProvider colorTheme='dark'>
        <ThemeMock />
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
        <ThemeMock />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme').textContent).toBe('light');
    await act(async () => {
      await userEvent.click(screen.getByTestId('setDark'));
    });
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });
});
