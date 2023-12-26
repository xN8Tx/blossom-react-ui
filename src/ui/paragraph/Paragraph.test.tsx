import React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  afterEach(() => cleanup());
  test('Should render', () => {
    render(
      <Paragraph color='primary' size='xs' weight='regular'>
        Hello world!
      </Paragraph>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toBeInTheDocument();
  });

  it('Snapshot XS', () => {
    render(
      <Paragraph color='primary' size='xs' weight='regular'>
        Hello world!
      </Paragraph>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toMatchSnapshot();
  });

  it('Snapshot S', () => {
    render(
      <Paragraph color='primary' size='s' weight='regular'>
        Hello world!
      </Paragraph>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toMatchSnapshot();
  });

  it('Snapshot M', () => {
    render(
      <Paragraph color='primary' size='m' weight='regular'>
        Hello world!
      </Paragraph>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toMatchSnapshot();
  });

  it('Snapshot L', () => {
    render(
      <Paragraph color='primary' size='l' weight='regular'>
        Hello world!
      </Paragraph>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toMatchSnapshot();
  });

  it('Snapshot XL', () => {
    render(
      <Paragraph color='primary' size='xl' weight='regular'>
        Hello world!
      </Paragraph>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toMatchSnapshot();
  });
});
