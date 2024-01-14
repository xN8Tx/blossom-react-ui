/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type ButtonPropsType = {
  children: React.ReactNode;
  color: 'blue' | 'red';
  onClick: (arg?: unknown) => void;
  disabled?: boolean;
  [x: string]: any;
};

export type { ButtonPropsType };
