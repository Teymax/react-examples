import React from 'react'
import { ModalContext } from '../context/Modal'

function useModal(modalJSX: any) {
  const { showModal, hideModal, ...ctx } = React.useContext(ModalContext)

  React.useEffect(() => {
    ctx.setContent(modalJSX)
  }, [])

  return { showModal, hideModal }
}

export default useModal
