import React from 'react';

import type { HeadingPropsType } from './Heading.types';

import style from './Heading.module.scss';

export const Heading = ({
  children,
  size,
  weight = 'bold',
  color = 'primary',
  ...props
}: HeadingPropsType) => {
  const className = `${style.Heading} ${style[size]} ${style[weight]} ${style[color]}`;

  const allProps = { className, children, ...props };

  if (size === 'xl' || size === 'l') return <h1 {...allProps} />;
  if (size === 'm') return <h2 {...allProps} />;
  if (size === 's') return <h3 {...allProps} />;
  if (size === 'xs') return <h3 {...allProps} />;
};
