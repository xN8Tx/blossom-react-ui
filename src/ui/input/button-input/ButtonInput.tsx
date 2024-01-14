import React from 'react';

import style from './ButtonInput.module.scss';
import { ButtonInputTypeProps } from './ButtonInput.types';

export function ButtonInput({
  children,
  value,
  onChange,
  onClick,
  placeholder,
  type,
  disabled = false,
  position,
  ...props
}: ButtonInputTypeProps) {
  const className = `${style.Wrapper} ${style[position]}`;

  return (
    <div className={className} {...props}>
      <input
        className={style.Input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <button className={style.Button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
