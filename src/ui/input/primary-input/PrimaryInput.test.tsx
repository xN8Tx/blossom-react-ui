import { fireEvent, render, screen } from '@testing-library/react';

import { PrimaryInputWrapper } from '../../../test/components/PrimaryInputWrapper.mock';
import React from 'react';

const ComponentMock = () => (
  <PrimaryInputWrapper placeholder='Enter u text here...' type='text' />
);

describe('PrimaryButton test', () => {
  it('PrimaryButton should render', () => {
    render(<ComponentMock />);

    const input = screen.getByPlaceholderText('Enter u text here...');

    expect(input).toBeInTheDocument();
  });

  it('PrimaryButton should change', () => {
    render(<ComponentMock />);

    const input = screen.getByPlaceholderText('Enter u text here...');

    expect(input).toBeInTheDocument();

    expect(input).toHaveValue('');
    fireEvent.change(input, { target: { value: 'text' } });
    expect(input).toHaveValue('text');
  });
});
