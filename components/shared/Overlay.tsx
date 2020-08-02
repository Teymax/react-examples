import React from 'react'

function Overlay({ children, action }: { children: any; action: () => void }) {
  return (
    <div className='overlay'>
      {children}
      <div className='backdrop' onClick={action} />
    </div>
  )
}

export default Overlay
