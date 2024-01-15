import styled from 'styled-components'
import useOrderStore from '../../hooks/useOrderStore'
import { EVENT, Interior, OPERATOR } from '../../types'
import { CounterButton, Tag } from '../common'

interface Props {
  item: Interior
}

export default function Card({ item }: Props) {
  const { increment, decrement } = useOrderStore()

  return (
    <Container selected={item.quantity > 0}>
      <Image />
      <CardItem>
        <CardHeader>
          <CardText>{item.name}</CardText>
          {item.event === EVENT.ON && <Tag name='이벤트' />}
        </CardHeader>
        <CardFooter>
          <CardCounter>
            <CounterButton onClick={() => decrement(item.id)} operator={OPERATOR.DECREMENT} />
            <CardText>{item.quantity ?? 0}</CardText>
            <CounterButton onClick={() => increment(item.id)} operator={OPERATOR.INCREMENT} />
          </CardCounter>
          <CardText>{item.price.toLocaleString()}원</CardText>
        </CardFooter>
      </CardItem>
    </Container>
  )
}

const Container = styled.div<{ selected?: boolean }>`
  width: 100%;
  height: 82px;
  border-radius: 10px;
  border: 1px solid #0000004d;
  padding: 9px 12px;
  display: flex;
  flex-direction: row;
  gap: 13px;
  background-color: ${(props) => (props.selected ? '#F75A2F1A' : 'white')};
`

const Image = styled.div`
  width: 62px;
  height: 62px;
  background: #d9d9d9;
`

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
`

const CardText = styled.span`
  font-size: 18px;
  display: inline-block;
`

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const CardCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    width: 24px;
    font-size: 18px;
    text-align: center;
  }
`
