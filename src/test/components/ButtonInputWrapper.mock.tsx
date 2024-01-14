import React, { ChangeEvent, useState } from 'react';

import { ButtonInput } from '../../ui';

import type { ButtonInputTypeProps } from '../../ui';

type ButtonInputWrapperType = Omit<ButtonInputTypeProps, 'value' | 'onChange'>;

export const ButtonInputWrapper = ({
  children,
  type,
  placeholder,
  position,
  disabled = false,
  onClick,
  ...props
}: ButtonInputWrapperType) => {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <ButtonInput
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      position={position}
      placeholder={placeholder}
      onChange={onChangeHandler}
      {...props}
    >
      {children}
    </ButtonInput>
  );
};
