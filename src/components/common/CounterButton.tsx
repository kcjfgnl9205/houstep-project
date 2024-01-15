import styled from 'styled-components'
import { OPERATOR } from '../../types'

interface Props {
  onClick: () => void
  operator: OPERATOR
}

export default function CounterButton({ onClick, operator }: Props) {
  const name = operator === OPERATOR.INCREMENT ? '+' : '-'

  return (
    <Button type='button' onClick={onClick}>
      {name}
    </Button>
  )
}

const Button = styled.button`
  background: none;
  border: none;
  width: 20px;
  font-size: 18px;
  padding: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`
