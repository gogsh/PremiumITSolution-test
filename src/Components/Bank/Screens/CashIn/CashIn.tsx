import React from 'react'
import { observer } from 'mobx-react-lite'

import { Cash } from '../../../../Types/TCash'

import bank from '../../../../store/bank'
import pocket from '../../../../store/pocket'
import card from '../../../../store/card'

const CashOut: React.FC = observer(() => {
  const onCashIn = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    bank.changeStatus('success')
  }

  const onBanknoteLoad = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    bank.cashIn({ [e.target.value]: 1 })
    card.cashIn(+e.target.value)
    pocket.cashOut(e.target.value)
  }

  const renderButtons = (pocketCash: Cash): JSX.Element[] => {
    const renderArr = []
    for (const key in pocketCash) {
      if (pocketCash[key] !== 0) {
        renderArr.push(
          <button value={key} key={key} onClick={onBanknoteLoad}>
            {key}
          </button>,
        )
      } else {
        renderArr.push(
          <button disabled={true} key={key}>
            {key}
          </button>,
        )
      }
    }
    return renderArr
  }

  return (
    <form>
      {renderButtons(pocket.cash)}
      <button onClick={onCashIn}>Подтвердить</button>
    </form>
  )
})

export default CashOut
