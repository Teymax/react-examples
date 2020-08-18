import React from 'react';

function Overlay({ children, action }: { children: any; action: () => void }) {
  React.useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <div className='overlay'>
      {children}
      <div className='backdrop' onClick={action} />
    </div>
  );
}

export default Overlay;
