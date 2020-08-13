import React from 'react'
import { AccountPointCards } from './PointCard'
import { AccountInfoItems } from './InfoItem'
import classNames from 'classnames'
import { Button } from '@components/UI'
import SectionGameHistory from './SectionGameHistory'
import { Formik, useFormik, FormikProps } from 'formik'
import { useSelector } from 'react-redux'
import { RootState } from '@store/reducers'

const SectionAccountManagementHeader = () => (
  <>
    <h1 className='section__head title title_headline account__title'>My Account</h1>

    <div className='account__point-cards'>
      <AccountPointCards />
    </div>
  </>
)

interface IMyInfoFormProps {
  email: string
  timeZone: string
  oddsFormat: string
  username: string
  firstName: string
  lastName: string
  state: string
  birthdate: string
  toReceiveOffers: boolean
}

const MyInfoFormBase = ({ formik }: { formik: FormikProps<IMyInfoFormProps> }) => {
  const [isFormActive, setIsFormActive] = React.useState(false)

  return (
    <form
      onSubmit={() => setIsFormActive(false)}
      className={classNames('account__form info__grid', {
        active: isFormActive,
      })}
    >
      <AccountInfoItems formik={formik} />
      <div className='info__action'>
        <Button
          className='info__btn'
          styleType='secondary'
          onClick={(e: any) => e.preventDefault() || setIsFormActive(!isFormActive)}
        >
          {isFormActive ? 'Save' : 'Edit my information'}
        </Button>
      </div>
    </form>
  )
}

const MyInfoForm = () => {
  const { user } = useSelector((state: RootState) => ({ user: state.auth.user }))

  console.log(user)

  const formik = useFormik<IMyInfoFormProps>({
    initialValues: {
      email: user?.email || '',
      timeZone: '',
      oddsFormat: '',
      username: '',
      birthdate: '',
      firstName: '',
      lastName: '',
      state: '',
      toReceiveOffers: false,
    },
    onSubmit(value) {
      console.log(value)
    },
  })

  return <MyInfoFormBase formik={formik} />
}
const SectionAccountManagement = () => {
  return (
    <section className='section account'>
      <SectionAccountManagementHeader />

      <div className='account__info info'>
        <h3 className='info__title'>My information</h3>
        <MyInfoForm />

        <SectionGameHistory />
      </div>
    </section>
  )
}

export default SectionAccountManagement
