type ModalStateType = 'error' | 'loading' | 'success' | 'idle';

type ModalContextType = {
  modalState: ModalStateType;
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>>;
  modalText: string;
  setModalText: React.Dispatch<React.SetStateAction<string>>;
};

type ModalProviderPropsType = {
  children: React.ReactNode;
};

export type { ModalStateType, ModalContextType, ModalProviderPropsType };
