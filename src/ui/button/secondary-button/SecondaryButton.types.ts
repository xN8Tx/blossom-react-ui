import type { ButtonPropsType } from '../index.types';

type SecondaryButtonPropsType = Omit<ButtonPropsType, 'color'> & {
  image?: (() => JSX.Element) | string;
};

export type { SecondaryButtonPropsType };
