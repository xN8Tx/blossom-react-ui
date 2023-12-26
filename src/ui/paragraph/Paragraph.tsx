import React from 'react';

import type { ParagraphPropsType } from './Paragraph.types';

import style from './Paragraph.module.scss';

export const Paragraph = ({
  children,
  size,
  weight = 'regular',
  color = 'primary',
  ...props
}: ParagraphPropsType) => {
  const className = `${style.Paragraph} ${style[size]} ${style[weight]} ${style[color]}`;

  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};
