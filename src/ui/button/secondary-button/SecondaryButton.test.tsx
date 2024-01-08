import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { SecondaryButton } from './SecondaryButton';

const mockOnClick = jest.fn();

describe('Secondary button test', () => {
  afterEach(() => cleanup());

  it('Should render', () => {
    render(
      <SecondaryButton onClick={mockOnClick}>Blossom Button</SecondaryButton>,
    );

    const button = screen.getByText('Blossom Button');

    expect(button).toBeInTheDocument();
  });
  it('Should click', () => {
    render(
      <SecondaryButton onClick={mockOnClick}>Blossom Button</SecondaryButton>,
    );

    const button = screen.getByText('Blossom Button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
  it('Should not click', () => {
    render(
      <SecondaryButton onClick={mockOnClick} disabled={true}>
        Blossom Button
      </SecondaryButton>,
    );

    const button = screen.getByText('Blossom Button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });
  it('Snapshot test', () => {
    render(
      <SecondaryButton onClick={mockOnClick} disabled={true}>
        Blossom Button
      </SecondaryButton>,
    );

    const button = screen.getByText('Blossom Button');
    expect(button).toBeInTheDocument();

    expect(button).toMatchSnapshot();
  });
});
