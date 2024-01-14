/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type TextSizeType = 'xs' | 's' | 'm' | 'l' | 'xl';
type TextColorType = 'light' | 'primary' | 'dark';

type TextPropsType<W> = {
  children: React.ReactNode;
  size: TextSizeType;
  weight?: W;
  color?: TextColorType;
  [x: string]: any;
};

export type { TextPropsType };
