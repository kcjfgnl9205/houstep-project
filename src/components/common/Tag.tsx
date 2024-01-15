import styled from 'styled-components'

interface Props {
  name: string
}

export default function Tag({ name }: Props) {
  return <Container>{name}</Container>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 23px;
  border-radius: 10px;
  color: #ffffff;
  background: #f75a2f;
  font-size: 13px;
  text-align: center;
`
