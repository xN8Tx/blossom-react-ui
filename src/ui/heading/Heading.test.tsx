import React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { Heading } from './Heading';

describe('Heading', () => {
  afterEach(() => cleanup());
  test('Should render', () => {
    render(
      <Heading color='primary' size='xs' weight='bold'>
        Hello world!
      </Heading>,
    );

    const heading = screen.getByText('Hello world!');

    expect(heading).toBeInTheDocument();
  });

  it('Snapshot XS', () => {
    render(
      <Heading color='primary' size='xs' weight='bold'>
        Hello world!
      </Heading>,
    );

    const heading = screen.getByText('Hello world!');

    expect(heading).toMatchSnapshot();
  });

  it('Snapshot S', () => {
    render(
      <Heading color='primary' size='s' weight='bold'>
        Hello world!
      </Heading>,
    );

    const heading = screen.getByText('Hello world!');

    expect(heading).toMatchSnapshot();
  });

  it('Snapshot M', () => {
    render(
      <Heading color='primary' size='m' weight='bold'>
        Hello world!
      </Heading>,
    );

    const heading = screen.getByText('Hello world!');

    expect(heading).toMatchSnapshot();
  });

  it('Snapshot L', () => {
    render(
      <Heading color='primary' size='l' weight='bold'>
        Hello world!
      </Heading>,
    );

    const heading = screen.getByText('Hello world!');

    expect(heading).toMatchSnapshot();
  });

  it('Snapshot XL', () => {
    render(
      <Heading color='primary' size='xl' weight='bold'>
        Hello world!
      </Heading>,
    );

    const heading = screen.getByText('Hello world!');

    expect(heading).toMatchSnapshot();
  });
});
