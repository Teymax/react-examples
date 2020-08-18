import React from 'react';
import classNames from 'classnames';

function Button({
  styleType = 'style_default',
  children = '',
  className = '',
  size = 'size_default',
  ...btnProps
}: {
  styleType?: 'primary' | 'secondary' | 'style_default' | 'link' | 'ghost';
  size?: 'normal' | 'tiny' | 'size_default';
  children?: any;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...btnProps}
      className={classNames(`btn btn--${styleType} btn--${size}`, className)}
    >
      {children}
    </button>
  );
}

export default Button;
