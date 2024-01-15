import styled from 'styled-components'

export default function NotFound() {
  return (
    <Container>
      <p>페이지를 찾을 수 없습니다.</p>
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
