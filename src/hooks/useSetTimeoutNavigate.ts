import { useEffect } from 'react'
import { To, useNavigate } from 'react-router-dom'

const useSetTimeoutNavigate = (delay: number, href: To) => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(href)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [navigate, delay, href])
}

export default useSetTimeoutNavigate
