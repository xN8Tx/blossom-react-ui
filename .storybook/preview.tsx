import React, { useContext } from 'react';
import type { Preview } from '@storybook/react';

import { ThemeProvider } from '../src';

import '../src/scss/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  argTypes: {
    colorTheme: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
      defaultValue: 'Dark',
      description: '```Do not use in project only for storybook showcase.```',
    },
  },
  args: {
    colorTheme: 'dark',
  },
  decorators: [
    (Story, context) => {
      const theme = context.args.colorTheme;

      return (
        <ThemeProvider colorTheme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
