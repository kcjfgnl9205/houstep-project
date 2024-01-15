import { create } from 'zustand'
import { ORDER_MAX_COUNT, ORDER_MIN_COUNT } from '../constants'
import { Interior } from '../types'

interface Store {
  items: Interior[]
  setItems: (items: Interior[]) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  getTotalPrice: () => number
  getTotalQuantity: () => number
}

const useOrderStore = create<Store>((set, get) => ({
  items: [],
  setItems: (items) => set(() => ({ items: items.map((item) => ({ ...item, quantity: 0 })) })),
  increment: (id) => {
    if (get().getTotalQuantity() >= ORDER_MAX_COUNT) {
      return
    }

    set((state) => {
      const items = state.items.map((item) => {
        if (item.quantity >= ORDER_MAX_COUNT || item.id !== id) {
          return item
        }
        return { ...item, quantity: item.quantity + 1 }
      })
      return { items }
    })
  },
  decrement: (id) => {
    set((state) => {
      const items = state.items.map((item) => {
        if (item.quantity <= ORDER_MIN_COUNT || item.id !== id) {
          return item
        }
        return { ...item, quantity: item.quantity - 1 }
      })
      return { items }
    })
  },
  getTotalPrice: () =>
    get().items.reduce((total, interior) => total + interior.price * interior.quantity, 0),
  getTotalQuantity: () => get().items.reduce((total, interior) => total + interior.quantity, 0),
}))

export default useOrderStore
