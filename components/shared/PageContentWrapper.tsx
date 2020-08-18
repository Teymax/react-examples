import React from 'react';
import classNames from 'classnames';

function PageContentWrapper({
  children,
  className = '',
}: {
  children: any;
  className?: string;
}) {
  return <div className={classNames('page__body', className)}>{children}</div>;
}

export default PageContentWrapper;
