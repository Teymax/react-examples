import React from 'react'
import { ModalContext } from './ModalContext'
import ModalRoot from './ModalRoot'

function ModalProvider({ children }: any) {
  const [modalContent, setModalContent] = React.useState(null!)
  const [isVisible, setIsVisible] = React.useState(false)

  const setContent = (modalComponent: any) =>
    setModalContent(() => modalComponent)

  const hideModal = () => setIsVisible(false)

  const showModal = () => setIsVisible(true)

  return (
    <ModalContext.Provider
      value={{ isVisible, setContent, modalContent, showModal, hideModal }}>
      {children}
      <ModalRoot component={modalContent} isVisible={isVisible} />
    </ModalContext.Provider>
  )
}

export default ModalProvider
