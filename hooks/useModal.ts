import React from 'react'
import { ModalContext } from '../context/Modal'

function useModal(modalComponent: () => JSX.Element) {
  const { showModal, hideModal, ...ctx } = React.useContext(ModalContext)

  React.useEffect(() => {
    ctx.setContent(modalComponent)
  }, [])

  return { showModal, hideModal }
}

export default useModal
