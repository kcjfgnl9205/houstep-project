import styled from 'styled-components'
import useSetTimeoutNavigate from '../hooks/useSetTimeoutNavigate'
import { routes } from '../routes'

export default function Error() {
  useSetTimeoutNavigate(3000, routes.order)

  return (
    <Container>
      <p>주문에 실패하였습니다.</p>
      <p>다시 시도해주세요.</p>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  p {
    font-size: 18px;
    text-align: center;
  }
`
