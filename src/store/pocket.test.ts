import pocket from './pocket'
import bank from './bank'

/** Тест кошелька пользователя в связке с банкоматом */

describe('Тест кошелька пользователя', () => {
  it('Пользователь корректно выдал наличные', () => {
    pocket.cash = {
      100: 1,
      200: 0,
      500: 1,
      1000: 0,
      2000: 1,
      5000: 1,
    }

    bank.cash = {
      100: 0,
      200: 2,
      500: 0,
      1000: 2,
      2000: 0,
      5000: 0,
    }
    bank.cashIn(pocket.cashOut(100))
    bank.cashIn(pocket.cashOut(500))
    bank.cashIn(pocket.cashOut(2000))
    bank.cashIn(pocket.cashOut(5000))

    expect(bank.cash[100]).toBe(1)
    expect(bank.cash[500]).toBe(1)
    expect(bank.cash[2000]).toBe(1)
    expect(bank.cash[5000]).toBe(1)

    expect(pocket.getCashSummary()).toBe(0)
  })

  /**-------------------------------------- */

  it('Пользователь корректно принял наличные', () => {
    pocket.cash = {
      100: 0,
      200: 0,
      500: 0,
      1000: 0,
      2000: 0,
      5000: 0,
    }

    bank.cash = {
      100: 0,
      200: 2,
      500: 0,
      1000: 2,
      2000: 0,
      5000: 0,
    }
    pocket.cashIn(bank.cashOut(2400))

    expect(pocket.cash[200]).toBe(2)
    expect(pocket.cash[1000]).toBe(2)
    expect(pocket.getCashSummary()).toBe(2400)
  })
})
