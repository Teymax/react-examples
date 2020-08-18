import React from 'react';
import classNames from 'classnames';

function Label({
  text,
  className = '',
  type = 'default',
}: {
  className?: string;
  text: string;
  type?: 'default' | 'success' | 'alert' | 'warning' | 'info';
}) {
  return (
    <div className={classNames('label', className, `label--${type}`)}>
      <div className='label__text'>{text}</div>
    </div>
  );
}

export default Label;
