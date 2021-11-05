import bank from '../../../../store/bank'

const Waiting: React.FC = () => {
  const onCardEnterHandler = () => {
    bank.changeStatus('pin-code')
  }

  return (
    <>
      <button onClick={onCardEnterHandler}>Вставить карту</button>
    </>
  )
}

export default Waiting
