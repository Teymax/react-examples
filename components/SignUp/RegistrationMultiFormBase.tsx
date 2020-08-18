import React from 'react';
import {
  RegisterFormBasics,
  RegisterFormAdditionalSecurity,
  RegisterFormSecurity,
  RegisterFormConfirmLocation,
} from '@components/shared';
import { IRegisterFormState } from './RegistrationMultiForm';
import { FormikProps } from 'formik';

export interface IMultiForm {
  step: number;
  actions?: {
    prev: () => void;
    next: () => void;
  };
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formik?: FormikProps<IRegisterFormState>;
}

const selectForm = (step: number, dataToPass: any) => {
  switch (step) {
    case 1:
      return <RegisterFormBasics {...dataToPass} />;

    case 2:
      return <RegisterFormSecurity {...dataToPass} />;

    case 3:
      return <RegisterFormAdditionalSecurity {...dataToPass} />;

    case 4:
      return <RegisterFormConfirmLocation {...dataToPass} />;

    default:
      return <RegisterFormBasics {...dataToPass} />;
  }
};

const RegistrationMultiFormBase = ({
  formik,
}: {
  formik: FormikProps<IRegisterFormState>;
}) => {
  const [step, setStep] = React.useState<number>(1);

  const prev = (e: any) => e.preventDefault() || setStep(step - 1);

  const next = (e: any) => e.preventDefault() || setStep(step + 1);

  const dataToPass = {
    ...formik.values,
    formik,
    step,
    actions: { prev, next },
  };

  return (
    <form className='form' onSubmit={next}>
      {selectForm(step, dataToPass)}
    </form>
  );
};

export default RegistrationMultiFormBase;
