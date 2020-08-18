import React from 'react';

const MultiFormHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: JSX.Element;
}) => (
  <div className='form__header'>
    <div className='form__title title title_display'>{title}</div>
    <div className='form__subtitle title title_body2'>{subtitle}</div>
  </div>
);

export default MultiFormHeader;
