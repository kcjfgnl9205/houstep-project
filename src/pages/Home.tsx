import Logo from '../assets/images/logo-main.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../routes'

export default function Home() {
  return (
    <Container>
      <img src={Logo} alt='메인로고' />
      <StyledLink to={routes.order}>주문하러 가기</StyledLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 41px;
  width: 100%;
  height: 100%;
  background-color: #000000;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 172px;
  height: 88px;
  font-size: 25px;
  border-radius: 20px;
  cursor: pointer;
`
