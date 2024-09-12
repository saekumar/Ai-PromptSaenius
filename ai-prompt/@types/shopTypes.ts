import { withdawMethod } from './withdawMethodTypes'

export type Shop = {
  id: string
  name: string
  description: string
  avatar: string
  ratings: number
  totalSales: number
  allProducts: number
  createdAt: Date
  updatedAt: Date
  userId: string
  bank: withdawMethod | null | undefined
}
