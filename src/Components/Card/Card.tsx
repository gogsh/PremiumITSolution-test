import { observer } from 'mobx-react-lite'
import card from '../../store/card'

import { CardContainer } from './Card-style'

const Card: React.FC = observer(() => {
  return (
    <CardContainer>
      <strong>Карта клиента</strong>
      <span>Баланс: {card.cash}</span>
      <span>Пин-код: {card.pinCode}</span>
    </CardContainer>
  )
})

export default Card
