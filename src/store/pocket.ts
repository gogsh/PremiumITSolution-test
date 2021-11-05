import { makeAutoObservable } from 'mobx'
import { Cash, BanknoteNominals } from '../Types/TCash'

/** Кошелёк клиента */
class Pocket {
  /** Кол-во банкнот каждого номинала в кошельке клиента */
  cash: Cash = {
    100: 2,
    200: 0,
    500: 0,
    1000: 4,
    2000: 1,
    5000: 0,
  }

  constructor() {
    makeAutoObservable(this)
  }

  cashIn = (banknotes: Cash | null) => {
    if (banknotes) {
      for (const b in banknotes) {
        this.cash[b] = this.cash[b] + banknotes[b]
      }
      return true
    } else {
      return false
    }
  }

  cashOut = (banknote: BanknoteNominals): Cash => {
    const loadedBanknote: Cash = {}
    this.cash[banknote] = this.cash[banknote] - 1
    loadedBanknote[banknote] = 1
    return loadedBanknote
  }

  getCashSummary = () => {
    let sum: number = 0
    for (const b in this.cash) {
      sum = sum + +b * this.cash[b]
    }
    return sum
  }
}

export default new Pocket()
