/* eslint-disable storybook/story-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryInputWrapper } from '../../../test/components/PrimaryInputWrapper.mock';

const meta = {
  title: 'UI/PrimaryInput',
  component: PrimaryInputWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter u text here...',
  },
} satisfies Meta<typeof PrimaryInputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    type: 'text',
  },
};
