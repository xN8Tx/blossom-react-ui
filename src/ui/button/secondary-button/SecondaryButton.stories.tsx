import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SecondaryButton } from './SecondaryButton';
import BackIcon from '../../../test/assets/BackIcon.mock';

const image = () => <BackIcon />;

const meta = {
  title: 'UI/SecondaryButton',
  component: SecondaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Blossom with love <3',
    onClick: () => console.log('Blossom click!!!'),
  },
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const SvgImage: Story = {
  args: {
    image: image,
  },
};
