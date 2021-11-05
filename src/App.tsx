import Bank from './Components/Bank/Bank'
import { observer } from 'mobx-react-lite'

const App: React.FC = observer(() => {
  return (
    <div className='App'>
      <Bank/>
    </div>
  )
})

export default App
