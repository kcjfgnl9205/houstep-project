import Logo from '../../assets/images/logo-header.png'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt='로고' />
    </Container>
  )
}

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  align-items: center;
  height: 57px;
  background-color: #000;
  box-shadow: 0px 4px 4px 0px #00000040;

  img {
    margin: auto 12px;
  }
`
