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
} satisfies Meta<typeof ButtonInputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    type: 'text',
    position: 'right',
  },
};

export const Left: Story = {
  args: {
    type: 'text',
    position: 'left',
  },
};
