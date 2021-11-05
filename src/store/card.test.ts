import card from './card'

describe('Тест карты', () => {
  it('Тест пополнения и вывода с карты', () => {
    card.cash = 0
    card.cashIn(100)
    expect(card.cash).toBe(100)

    card.cashOut(50)
    expect(card.cash).toBe(50)
  })

  it('Сравнение пин-кода отрабатывает корректно', () => {
    expect(card.matchPinCode(1234)).toBe(true)
    expect(card.matchPinCode(8888)).toBe(false)
  })
})
