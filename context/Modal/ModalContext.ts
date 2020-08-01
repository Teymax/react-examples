import React from 'react'

export const ModalContext = React.createContext<any>({
  isVisible: false,
  modalContent: null,
  setContent: null,
  showModal: null,
  hideModal: null,
})
