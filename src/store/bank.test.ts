import bank from './bank'

describe('Тест банкомата', () => {
  it('Банкомат выдаёт наличные', () => {
    bank.cash = {
      100: 1,
      200: 1,
      500: 0,
      1000: 1,
      2000: 13,
      5000: 2,
    }
    bank.cashOut(1300)
    expect(bank.cash[1000]).toBe(0)
    expect(bank.cash[200]).toBe(0)
    expect(bank.cash[100]).toBe(0)

    bank.cashOut(7000)
    expect(bank.cash[5000]).toBe(1)
    expect(bank.cash[2000]).toBe(12)
  })

  it('Банкомат выдаёт ошибку при нехватке купюр', () => {
    bank.cashOut(100)
    expect(bank.status).toBe('error')
  })

  /**-------------------------------------- */

  it('Банкомат принимает наличные', () => {
    bank.cash = {
      100: 0,
      200: 0,
      500: 0,
      1000: 0,
      2000: 0,
      5000: 0,
    }
    bank.status = 'waiting'
    bank.cashIn({ 100: 1, 200: 2 })
    expect(bank.cash[200]).toBe(2)
    expect(bank.cash[100]).toBe(1)
  })
})
