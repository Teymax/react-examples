import React from 'react';
import Overlay from './Overlay';
import { ModalContext } from '@context/Modal';

function Modal({ children }: any) {
  const { hideModal } = React.useContext(ModalContext);

  return (
    <Overlay action={hideModal}>
      <div className='modal'>
        <div className='modal__container'>{children}</div>
      </div>
    </Overlay>
  );
}

export default Modal;
