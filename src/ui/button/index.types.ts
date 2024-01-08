import React from 'react';

type ButtonPropsType = {
  children: React.ReactNode;
  color: 'blue' | 'red';
  onClick: (arg?: unknown) => void;
  disabled?: boolean;
};

export type { ButtonPropsType };
