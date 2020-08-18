import React from 'react';

const useToggler = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const open = () => setIsVisible(true);

  const close = () => setIsVisible(false);

  const toggle = () => setIsVisible(!isVisible);

  return { isVisible, open, close, toggle };
};

export default useToggler;
