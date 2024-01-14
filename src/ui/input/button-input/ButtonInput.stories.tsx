import type { Meta, StoryObj } from '@storybook/react';

import { ButtonInputWrapper } from '../../../test/components/ButtonInputWrapper.mock';

const meta = {
  title: 'UI/ButtonInput',
  component: ButtonInputWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: '(*_*)',
    placeholder: 'Enter u text here...',
    onClick: () => console.log('U click (^*^)'),
    disabled: false,
  },
  argTypes: {
    onClick: {
      description: '```() => void```',
    },
    disabled: {
      description: '```boolean```',
    },
    type: {
      description:
        '```email```  ```number```  ```password```  ```text```  ```tel```',
      options: ['email', 'number', 'password', 'text', 'tel'],
      control: { type: 'radio' },
    },
    position: {
      description: '```left``` ```right```',
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ButtonInputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Use ButtonInput instead the ButtonInputWrapper */
export const Right: Story = {
  args: {
    type: 'text',
    position: 'right',
  },
};

/** Use ButtonInput instead the ButtonInputWrapper */
export const Left: Story = {
  args: {
    type: 'text',
    position: 'left',
  },
};
