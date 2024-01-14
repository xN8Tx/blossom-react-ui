import { fireEvent, render, screen } from '@testing-library/react';

import { ButtonInputWrapper } from '../../../test/components/ButtonInputWrapper.mock';
import React from 'react';

const onClickMock = jest.fn();

const ComponentMock = () => (
  <ButtonInputWrapper
    position='left'
    placeholder='Enter u text here...'
    onClick={onClickMock}
    type='text'
  >
    (*_*)
  </ButtonInputWrapper>
);

describe('ButtonInput test', () => {
  it('ButtonInput should render', () => {
    render(<ComponentMock />);

    const input = screen.getByPlaceholderText('Enter u text here...');

    expect(input).toBeInTheDocument();
  });

  it('ButtonInput should change', () => {
    render(<ComponentMock />);

    const input = screen.getByPlaceholderText('Enter u text here...');

    expect(input).toBeInTheDocument();

    expect(input).toHaveValue('');
    fireEvent.change(input, { target: { value: 'text' } });
    expect(input).toHaveValue('text');
  });

  it('ButtonInput should click', () => {
    render(<ComponentMock />);

    const input = screen.getByPlaceholderText('Enter u text here...');
    const button = screen.getByText('(*_*)');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(onClickMock).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
