import React from 'react'
import ModalRoot from './ModalRoot'

export const ModalContext = React.createContext<any>({
  isVisible: false,
  modalContent: null,
  setContent: null,
  showModal: null,
  hideModal: null,
})

export function ModalProvider({ children }: any) {
  const [modalContent, setModalContent] = React.useState(null!)
  const [isVisible, setIsVisible] = React.useState(false)

  const setContent = (modalComponent: any) => setModalContent(() => modalComponent)

  const hideModal = () => setIsVisible(false)

  const showModal = () => setIsVisible(true)

  return (
    <ModalContext.Provider
      value={{ isVisible, setContent, modalContent, showModal, hideModal }}
    >
      {children}
      <ModalRoot component={modalContent} isVisible={isVisible} />
    </ModalContext.Provider>
  )
}
