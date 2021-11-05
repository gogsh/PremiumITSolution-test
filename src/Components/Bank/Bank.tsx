import { BankStatus } from '../../Types/TBank'

import { observer } from 'mobx-react-lite'
import bank from '../../store/bank'

import * as Screen from './Screens/index'

const Bank: React.FC = observer(() => {
  const renderScreen = (status: BankStatus) => {
    switch (status) {
      case 'waiting':
        return <Screen.Waiting />
      case 'pin-code':
        return <Screen.PinCode />
      case 'choose-action':
        return <Screen.ChooseAction />
      case 'cash-in':
        return <Screen.CashIn />
      case 'cash-out':
        return <Screen.CashOut />
      case 'error':
        return <Screen.ErrorScreen />
      case 'success':
        return <Screen.Success />
    }
  }

  return <>{renderScreen(bank.status)}</>
})

export default Bank
