import React from 'react';
import AccountInfoItem from './AccountInfoItem';
import { FormikProps } from 'formik';

const infoItems = [
  {
    title: 'Email',
    value: 'admin@admin.com',
    metaName: 'email',
  },
  {
    title: 'Time zone',
    value: 'Central Time',
    metaName: 'timeZone',
  },
  {
    title: 'Odds Format',
    value: 'U.S. Odds',
    metaName: 'oddsFormat',
  },
  {
    title: 'Username',
    value: 'admin@admin.com',
    metaName: 'username',
  },
  {
    title: 'First Name',
    value: 'admin@admin.com',
    metaName: 'firstName',
  },
  {
    title: 'Last Name',
    value: 'admin@admin.com',
    metaName: 'lastName',
  },
  {
    title: 'State of residence',
    value: 'admin@admin.com',
    metaName: 'state',
  },
  {
    title: 'Birthdate',
    value: 'admin@admin.com',
    metaName: 'birthdate',
  },
  {
    title: 'Receive Email Offers',
    value: 'admin@admin.com',
    metaName: 'toReceiveOffers',
  },
];

function AccountInfoItems({ formik }: { formik: FormikProps<any> }) {
  return (
    <>
      {infoItems.map((item) => (
        <AccountInfoItem
          title={item.title}
          metaName={item.metaName}
          key={item.title}
          formik={formik}
        />
      ))}
    </>
  );
}

export default AccountInfoItems;
