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
      type: 'boolean',
    },
  },
  args: {
    colorTheme: true,
  },
  decorators: [
    (Story, context) => {
      const theme = context.args.colorTheme === true ? 'dark' : 'light';

      return (
        <ThemeProvider colorTheme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
