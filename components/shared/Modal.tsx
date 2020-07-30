import React from 'react'

function Modal({ children }: any) {
  return (
    <div className='modal'>
      <div className='modal__container'>{children}</div>
      <div className='backdrop' />
    </div>
  )
}

export default Modal
