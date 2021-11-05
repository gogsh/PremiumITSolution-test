import bank from '../../../../store/bank'

const ChooseAction: React.FC = () => {
  const cashInHandler = () => {
    bank.changeStatus('cash-in')
  }

  const cashOutHandler = () => {
    bank.changeStatus('cash-out')
  }

  return (
    <>
      <button onClick={cashInHandler}>Внести наличные</button>
      <button onClick={cashOutHandler}>Снять наличные</button>
    </>
  )
}

export default ChooseAction
