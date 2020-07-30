import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from 'context/ModalContext'

function useModal(modalJSX: any) {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const context = React.useContext(ModalContext)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const hideModal = () => {
    setIsModalVisible(false)
  }

  React.useEffect(() => {
    if (isModalVisible) {
      console.log('here')
      context.showModal(modalJSX)
    } else {
      context.hideModal()
    }

    return () => context.hideModal()
  }, [isModalVisible])

  return { showModal, hideModal }
}

export default useModal
