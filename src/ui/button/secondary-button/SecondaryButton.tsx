import React from 'react';

import type { SecondaryButtonPropsType } from './SecondaryButton.types';

import style from './SecondaryButton.module.scss';

export function SecondaryButton({
  children,
  onClick,
  disabled = false,
  image,
  ...props
}: SecondaryButtonPropsType) {
  const isImage: boolean = image !== undefined;
  const isImageString = typeof image === 'string';

  return (
    <button
      className={style.Button}
      onClick={onClick}
      disabled={disabled}
      contains-image={isImage.toString()}
      {...props}
    >
      {isImage && (isImageString ? <img src={image} alt='Icon' /> : image!())}

      <span>{children}</span>
    </button>
  );
}
