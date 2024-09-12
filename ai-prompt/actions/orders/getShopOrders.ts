import prisma from '@/lib/prismaDb'
import { clerkClient } from '@clerk/nextjs'

export const getShopOrders = async ({
  sellerId,
}: {
  sellerId: string | undefined
}) => {
  try {
    const orders: any = await prisma.orders.findMany({
      where: {
        prompt: {
          sellerId,
        },
      },
      include: {
        prompt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    for (const order of orders) {
      const userId = order?.userId
      if (userId) {
        const user = await clerkClient.users.getUser(userId)
        const userData = {
          id: user.id,
          email: user.emailAddresses[0].emailAddress,
          userFirstName: user.firstName,
          userLastName: user.lastName,
        }
        order.user = userData
      }
    }
    console.log(orders)
    return orders
  } catch (error) {
    console.log(error)
  }
}
