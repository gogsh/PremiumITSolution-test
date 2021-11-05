import { observer } from 'mobx-react-lite'
import GlobalStyle from './theme/globalStyle'

import Bank from './Components/Bank/Bank'
import Card from './Components/Card/Card'

const App: React.FC = observer(() => {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Card />
        <Bank />
      </div>
    </>
  )
})

export default App
