import React, { useContext } from 'react';

import { ModalContext } from './ModalContext';

import { Paragraph } from '../../ui';

import style from './Modal.module.scss';

export function Modal() {
  const { modalState, modalText } = useContext(ModalContext);

  return (
    <div className={style.wrapper} modal-state={modalState}>
      {modalState !== 'idle' && (
        <Paragraph size='l' color='primary'>
          {modalText}
        </Paragraph>
      )}
    </div>
  );
}
