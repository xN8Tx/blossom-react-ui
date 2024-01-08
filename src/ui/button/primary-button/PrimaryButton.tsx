import React from 'react';

import type { ButtonPropsType } from '../index.types';

import style from './PrimaryButton.module.scss';

export function PrimaryButton({
  children,
  color,
  onClick,
  disabled = false,
  ...props
}: ButtonPropsType) {
  const className = `${style.Button} ${style[color]}`;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
