import React, { useState } from 'react'

import bank from '../../../../store/bank'
import pocket from '../../../../store/pocket'
import card from '../../../../store/card'

import { CashOutLayout } from './CashOut-styles'

const CashOut: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | ''>('')

  const onInputChange = (e: React.ChangeEvent<any>) => {
    setInputValue(e.target.value)
  }

  const onCashOut = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    if (card.cash < inputValue) {
      bank.changeStatus('error')
    } else if (+inputValue) {
      const status = pocket.cashIn(bank.cashOut(+inputValue))
      if (status) {
        card.cashOut(+inputValue)
      }
    }
  }

  return (
    <CashOutLayout>
      <input
        type='number'
        onInput={onInputChange}
        value={inputValue}
        placeholder={'Введите сумму'}
      />
      <button className={'Button_primary'} onClick={onCashOut} value={inputValue}>
        Получить наличные
      </button>
    </CashOutLayout>
  )
}

export default CashOut
