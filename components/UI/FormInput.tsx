import React from 'react';
import classNames from 'classnames';
import SuccessMarkSvg from '../../public/img/success_mark.svg';
import ErrorMarkSvg from '../../public/img/error_mark.svg';
import { validateField } from '@utils';
import { FormikProps } from 'formik';

const getIcon = (status: 'error' | 'success' | '') => {
  switch (status) {
    case 'error':
      return <ErrorMarkSvg />;

    case 'success':
      return <SuccessMarkSvg />;
    default:
      break;
  }
};

const FormInputValidationIcon = ({
  status = '',
}: {
  status?: 'error' | 'success' | '';
}) => <div className={classNames('field__icon', status)}>{getIcon(status)}</div>;

function FormInput({
  label = '',
  formik,
  icon = null,
  ...inputProps
}: {
  label?: string;
  formik: FormikProps<any>;
  icon?: JSX.Element;
} & React.HTMLProps<HTMLInputElement>) {
  const status = React.useMemo(() => validateField(inputProps.name, formik), [
    formik,
  ]);

  return (
    <div className={classNames('field', status)}>
      <div className='field__wrap'>
        {formik.values[inputProps.name] && (
          <label className='field__label'>{label}</label>
        )}
        <input
          {...inputProps}
          className='field__input'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[inputProps.name]}
        />
        {validateField(inputProps.name, formik) ? (
          <FormInputValidationIcon status={status} />
        ) : (
          icon
        )}
      </div>
    </div>
  );
}

export default FormInput;
