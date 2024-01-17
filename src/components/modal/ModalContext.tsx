import React, { createContext, useState } from 'react';

import type {
  ModalContextType,
  ModalProviderPropsType,
  ModalStateType,
} from './Modal.types';

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

function ModalProvider({ children }: ModalProviderPropsType) {
  const [modalState, setModalState] = useState<ModalStateType>('idle');
  const [modalText, setModalText] = useState<string>('');

  return (
    <ModalContext.Provider
      value={{ modalState, setModalState, modalText, setModalText }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
