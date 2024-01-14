import React, { ChangeEvent, useState } from 'react';

import { PrimaryInput } from '../../ui';
import type { InputPropsType } from '../../ui';

type PrimaryInputWrapperType = Omit<InputPropsType, 'value' | 'onChange'>;

export const PrimaryInputWrapper = ({
  type,
  placeholder,
}: PrimaryInputWrapperType) => {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <PrimaryInput
      value={value}
      onChange={onChangeHandler}
      type={type}
      placeholder={placeholder}
    />
  );
};
