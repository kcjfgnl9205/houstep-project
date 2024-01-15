import axios from 'axios'
import { Interior, Response, STATUS } from '../types'

const instance = axios.create({
  baseURL: `http://localhost:3001/items`,
})

// 주문목록 조회하기
export const fetchGetItems = async () => {
  try {
    const response = await instance.get<Interior[]>(`/`)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

// 주문요청
export const fetchPostOrder = async (): Promise<Response> => {
  try {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve({ code: STATUS.OK, message: 'success' })
        } else {
          reject({ code: STATUS.ERROR, message: 'error' })
        }
      }, 1500)
    })
  } catch (error) {
    console.error(error)
    return { code: STATUS.ERROR, message: 'error' }
  }
}
