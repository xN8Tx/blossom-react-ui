/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react';

type InputPropsType = {
  type: 'email' | 'number' | 'password' | 'text' | 'tel';
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
};

export type { InputPropsType };
