export const enum OPERATOR {
  INCREMENT = 1,
  DECREMENT = 0,
}
export const enum EVENT {
  ON = 1,
  OFF = 0,
}

export const enum STATUS {
  OK = 1,
  ERROR = 0,
}

export interface Interior {
  id: string
  name: string
  event: EVENT
  materialType: number
  price: number
  quantity: number
}

export interface Response {
  code: STATUS
  message: string
  data?: any
}
