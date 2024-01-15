import styled from 'styled-components'
import CheckImgae from '../assets/images/check.png'
import useSetTimeoutNavigate from '../hooks/useSetTimeoutNavigate'
import { routes } from '../routes'

export default function Complete() {
  useSetTimeoutNavigate(3000, routes.order)

  return (
    <Container>
      <img src={CheckImgae} alt='확인' />
      <p>주문이 완료되었습니다.</p>
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
