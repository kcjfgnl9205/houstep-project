import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchGetItems } from '../apis/orders'
import useOrderStore from '../hooks/useOrderStore'
import { Header, Loading } from '../components/layout'
import { Card, Total } from '../components/Order'

export default function Order() {
  const [isLoading, setIsLoading] = useState(false)
  const { items, setItems } = useOrderStore()

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)

      const data = await fetchGetItems()
      setItems(data)

      setIsLoading(false)
    }
    fetch()
  }, [setItems])

  return (
    <>
      <Header />
      <Container>
        {isLoading && <Loading />}

        <CardList>
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </CardList>
      </Container>
      <Total />
    </>
  )
}

const Container = styled.main`
  width: 100%;
  max-width: 350px;
  height: calc(100vh - 170px - 57px);
  margin: 57px auto 170px auto;
  overflow-y: scroll;
`

const CardList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 19px 25px;
`
