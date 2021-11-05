import React, { useState } from 'react'

import bank from '../../../../store/bank'
import card from '../../../../store/card'

const PinCode: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | ''>('')
  const [invalidPin, setInvalidPin] = useState<boolean>(false)

  const onInputChange = (e: React.ChangeEvent<any>) => {
    setInputValue(e.target.value)
  }

  const pinCodeHandler = (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    if (card.matchPinCode(+e.target.value)) {
      bank.changeStatus('choose-action')
    } else {
      setInvalidPin(true)
      setTimeout(() => {
        setInvalidPin(false)
      }, 2000)
    }
  }

  return (
    <form>
      {invalidPin ? <span>Неверный пин-код</span> : null}
      <input
        onInput={onInputChange}
        value={inputValue}
        placeholder={'Введите пин-код'}
        maxLength={4}
      />
      <button onClick={pinCodeHandler} value={inputValue}>
        Подтвердить
      </button>
    </form>
  )
}

export default PinCode
