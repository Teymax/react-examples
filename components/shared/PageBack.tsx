import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

const PageBack = ({
  className = '',
  text,
}: {
  className?: string;
  text: string;
}) => (
  <div className={classNames('page-back', className)}>
    <Link href='/'>
      <a>{text}</a>
    </Link>
  </div>
);

export default PageBack;
