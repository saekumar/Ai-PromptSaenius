'use server'
import prisma from '@/lib/prismaDb'

export const getTopSellers = async () => {
  try {
    const sellers = await prisma.shops.findMany({
      take: 1,
      orderBy: {
        allProducts: 'desc',
      },
    })
    console.log(sellers)
    return sellers
  } catch (error) {
    console.log(error)
  }
}
