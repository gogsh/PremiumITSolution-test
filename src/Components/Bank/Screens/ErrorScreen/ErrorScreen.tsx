import bank from '../../../../store/bank'

const ErrorScreen: React.FC = () => {
  const anotherAmountHandler = () => {
    bank.previousStatus === 'cash-in'
      ? bank.changeStatus('cash-in')
      : bank.changeStatus('cash-out')
  }

  const cardOutHandler = () => {
    bank.changeStatus('waiting')
  }

  return (
    <>
      <h2>Операция не может быть выполнена</h2>
      <button onClick={anotherAmountHandler}>Внести другую сумму</button>
      <button onClick={cardOutHandler}>Вернуть карту</button>
    </>
  )
}

export default ErrorScreen
