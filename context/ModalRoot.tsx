import React from 'react'
import ReactDOM from 'react-dom'

function ModalRoot({ component: RootComponent }: any) {
  return process.browser && RootComponent
    ? ReactDOM.createPortal(<RootComponent />, document.body)
    : null
}

export default ModalRoot
