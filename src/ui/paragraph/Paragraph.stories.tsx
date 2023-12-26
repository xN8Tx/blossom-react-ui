import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './Paragraph';

const meta = {
  title: 'UI/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Blossom with love <3',
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    color: 'primary',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    color: 'primary',
  },
};

export const MediumLight: Story = {
  args: {
    size: 'm',
    color: 'light',
  },
};
export const MediumDark: Story = {
  args: {
    size: 'm',
    color: 'dark',
  },
};
