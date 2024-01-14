import React from 'react';

import type { InputPropsType } from '../index.types';

import style from './PrimaryInput.module.scss';

export function PrimaryInput({
  placeholder,
  type,
  value,
  onChange,
}: InputPropsType) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={style.Input}
      placeholder={placeholder}
    />
  );
}
