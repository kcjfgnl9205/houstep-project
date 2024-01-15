import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { fetchPostOrder } from '../../apis/orders'
import useOrderStore from '../../hooks/useOrderStore'
import { Button } from '../common'
import { routes } from '../../routes'
import { STATUS } from '../../types'

export default function Total() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { getTotalPrice, getTotalQuantity } = useOrderStore()

  const btnName = useMemo(() => {
    return isLoading ? '로딩중...' : '주문하기'
  }, [isLoading])

  const handleClick = async () => {
    try {
      setIsLoading(true)
      const response = await fetchPostOrder()
      const to = response.code === STATUS.OK ? routes.complete : routes.error
      navigate(to)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <InfoContainer>
        <Span>총 수량 : {getTotalQuantity()}개</Span>
        <Span>총 가격 : {getTotalPrice().toLocaleString()}원</Span>
      </InfoContainer>
      <Button type='button' onClick={handleClick} disabled={isLoading || getTotalQuantity() === 0}>
        {btnName}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 350px;
  height: 170px;
  border-radius: 20px 20px 0px 0px;
  background: #ffffff;
  box-shadow: 0px -4px 10px 0px #00000040;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 23px 22px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Span = styled.span`
  width: 100%;
  height: 26.24px;
  text-align: right;
  font-size: 18px;
`
