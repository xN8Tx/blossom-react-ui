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
  argTypes: {
    type: {
      description:
        '```email```  ```number```  ```password```  ```text```  ```tel```',
      options: ['email', 'number', 'password', 'text', 'tel'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof PrimaryInputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Use PrimaryInput instead the PrimaryInputWrapper */
export const Input: Story = {
  args: {
    type: 'text',
  },
};
