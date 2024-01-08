import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { PrimaryButton } from './PrimaryButton';

const mockOnClick = jest.fn();

describe('primary button test', () => {
  afterEach(() => cleanup());

  it('Should render', () => {
    render(
      <PrimaryButton onClick={mockOnClick} color='blue'>
        Blossom Button
      </PrimaryButton>,
    );

    const button = screen.getByText('Blossom Button');

    expect(button).toBeInTheDocument();
  });
  it('Should click', () => {
    render(
      <PrimaryButton onClick={mockOnClick} color='blue'>
        Blossom Button
      </PrimaryButton>,
    );

    const button = screen.getByText('Blossom Button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
  it('Should not click', () => {
    render(
      <PrimaryButton onClick={mockOnClick} color='blue' disabled={true}>
        Blossom Button
      </PrimaryButton>,
    );

    const button = screen.getByText('Blossom Button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });
  it('Snapshot test', () => {
    render(
      <PrimaryButton onClick={mockOnClick} color='blue' disabled={true}>
        Blossom Button
      </PrimaryButton>,
    );

    const button = screen.getByText('Blossom Button');
    expect(button).toBeInTheDocument();

    expect(button).toMatchSnapshot();
  });
});
