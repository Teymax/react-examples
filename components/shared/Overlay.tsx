import React from 'react'

function Overlay({ children, action }: any) {
  return (
    <div className='overlay'>
      {children}
      <div className='backdrop' onClick={action} />
    </div>
  )
}

export default Overlay
