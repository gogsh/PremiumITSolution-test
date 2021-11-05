import { makeAutoObservable } from 'mobx'

class Card {
  /** Кол-во денег на карте */
  cash: number = 0
  private pinCode: number = 1234

  constructor() {
    makeAutoObservable(this)
  }

  /** Сравнить пин-код */
  matchPinCode = (potentialPin: number): boolean => {
    return potentialPin === this.pinCode ? true : false
  }

  cashIn = (value: number) => {
    this.cash = this.cash + value
  }

  cashOut = (value: number) => {
    this.cash = this.cash - value
  }
}

export default new Card()
