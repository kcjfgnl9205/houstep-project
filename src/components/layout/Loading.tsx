import styled from 'styled-components'

export default function Loading() {
  return (
    <Container>
      <p>목록을</p>
      <p>불러오고 있습니다.</p>
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
  gap: 8px;

  p {
    font-size: 18px;
    text-align: center;
  }
`
