import type { ButtonPropsType } from '../../button';
import type { InputPropsType } from '../index.types';

type ButtonInputTypeProps = InputPropsType &
  Omit<ButtonPropsType, 'color'> & {
    position: 'left' | 'right';
  };

export type { ButtonInputTypeProps };
