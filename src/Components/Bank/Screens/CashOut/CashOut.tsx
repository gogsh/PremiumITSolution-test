import React, { useState } from 'react'

import bank from '../../../../store/bank'
import pocket from '../../../../store/pocket'
import card from '../../../../store/card'

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
      pocket.cashIn(bank.cashOut(+inputValue))
      card.cashOut(+inputValue)
      setInputValue('')
    }
  }

  return (
    <form>
      <input
        type='number'
        onInput={onInputChange}
        value={inputValue}
        placeholder={'Введите сумму'}
      />
      <button onClick={onCashOut} value={inputValue}>
        Получить наличные
      </button>
    </form>
  )
}

export default CashOut
