import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton } from './PrimaryButton';

const meta = {
  title: 'UI/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Blossom with love <3',
    onClick: () => console.log('Blossom click!!!'),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnabledBlue: Story = {
  args: {
    color: 'blue',
  },
};

export const DisabledBlue: Story = {
  args: {
    color: 'blue',
    disabled: true,
  },
};

export const EnabledRed: Story = {
  args: {
    color: 'red',
  },
};

export const DisabledRed: Story = {
  args: {
    color: 'red',
    disabled: true,
  },
};
