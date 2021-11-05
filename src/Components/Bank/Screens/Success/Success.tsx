import bank from '../../../../store/bank'

const Success: React.FC = () => {
  const onCardEnterHandler = () => {
    bank.changeStatus('waiting')
  }

  return (
    <>
      <h2>Опрация успещно завершена</h2>
      <button onClick={onCardEnterHandler}>Вернуть карту</button>
    </>
  )
}

export default Success
