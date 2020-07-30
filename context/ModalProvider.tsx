import React from 'react'
import { ModalContext } from './ModalContext'
import ModalRoot from './ModalRoot'

function ModalProvider({ children }: any) {
  const [modal, setModal] = React.useState(null!)

  const showModal = modalComponent => setModal(modalComponent)

  const hideModal = () => setModal(null!)

  console.log(modal)

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <ModalRoot component={modal} />
    </ModalContext.Provider>
  )
}

export default ModalProvider
