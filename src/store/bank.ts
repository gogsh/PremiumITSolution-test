import { makeAutoObservable } from 'mobx'
import { BankStatus } from '../Types/TBank'
import { Cash, BanknoteNominals } from '../Types/TCash'

/** Банкомат */
class Bank {
  /** Статус интерфейса банкомата */
  status: BankStatus = 'waiting'

  previousStatus: BankStatus | null = null

  /** Массив приоритета выдачи банкнот */
  banknotesFlow: BanknoteNominals[] = [5000, 2000, 1000, 500, 200, 100]

  /** Кол-во банкнот каждого номинала в банкомате */
  cash: Cash = {
    100: 5,
    200: 2,
    500: 8,
    1000: 9,
    2000: 6,
    5000: 4,
  }

  constructor() {
    makeAutoObservable(this)
  }

  changeStatus = (newStatus: BankStatus) => {
    this.previousStatus = this.status
    this.status = newStatus
  }

  /** Вывод средств
   * @returns Выдаваемые пользователю банкноты
   */
  cashOut = (value: number): Cash | null => {
    const stash: Cash = { ...this.cash }

    /** Объект выдаваемых банкнот */
    const receivedBanknotes: Cash = {}

    this.banknotesFlow.forEach(b => {
      while (value - b >= 0 && stash[b] !== 0) {
        value = value - b
        stash[b] = stash[b] - 1
        receivedBanknotes[b]
          ? (receivedBanknotes[b] = receivedBanknotes[b] + 1)
          : (receivedBanknotes[b] = 1)
      }
    })

    if (value === 0) {
      this.status = 'success'
      this.cash = stash
      return receivedBanknotes
    } else {
      this.status = 'error'
      return null
    }
  }

  /** Ввод средств */
  cashIn = (banknotes: Cash) => {
    for (const b in banknotes) {
      this.cash[b] = this.cash[b] + banknotes[b]
    }
  }
}

export default new Bank()
