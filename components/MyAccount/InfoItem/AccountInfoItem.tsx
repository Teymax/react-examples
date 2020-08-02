import React from 'react'

const AccountInfoItem = ({ title, value }: { title: string; value: string }) => {
  const [inputValue, setInputValue] = React.useState(value)

  return (
    <div className='info__item item'>
      <div className='item__title'>{title}</div>
      {/* <div className='item__value'>{value}</div> */}
      <input
        className='item__value account__input'
        onChange={(e: any) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  )
}

export default AccountInfoItem
