import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '@components/shared';

function ModalRoot({ component: RootComponent, isVisible }: any) {
  return process.browser && isVisible
    ? ReactDOM.createPortal(
        <Modal>
          <RootComponent />
        </Modal>,
        document.body
      )
    : null;
}

export default ModalRoot;
