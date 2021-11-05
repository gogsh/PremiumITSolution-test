import React, { useState } from 'react'

import bank from '../../../../store/bank'
import card from '../../../../store/card'

import { PinCodeLayout, Alert } from './PinCode-style'

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
    <>
      {invalidPin ? <Alert>Неверный пин-код</Alert> : null}
      <PinCodeLayout>
        <input
          onInput={onInputChange}
          value={inputValue}
          placeholder={'Введите пин-код'}
          maxLength={4}
        />
        <button onClick={pinCodeHandler} value={inputValue}>
          Подтвердить
        </button>
      </PinCodeLayout>
    </>
  )
}

export default PinCode
