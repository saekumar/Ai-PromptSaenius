// // getUser.ts
'use server'
import { User, currentUser } from '@clerk/nextjs/server'
import prisma from '@/lib/prismaDb'

export async function getUser(): Promise<{
  user: User | undefined
  shop: Object | undefined | null
}> {
  try {
    const user: User | null = await currentUser()

    if (!user) {
      return { user: undefined, shop: undefined }
    }

    const shop = await prisma.shops.findUnique({
      where: {
        userId: user.id,
      },
    })

    return {
      user: convertToPlainObject(user),
      shop: shop ? convertToPlainObject(shop) : null,
    }
  } catch (error) {
    console.log('load user error', error)
    return { user: undefined, shop: null }
  }
}

// Utility function to convert objects to plain objects
function convertToPlainObject(obj: any): User {
  return JSON.parse(JSON.stringify(obj))
}

// 'use server'
// import { User, currentUser } from '@clerk/nextjs/server'
// import prisma from '@/lib/prismaDb'

// export async function getUser() {
//   try {
//     const user: User | null = await currentUser()

//     if (!user) {
//       return
//     }

//     const shop = await prisma.shops.findUnique({
//       where: {
//         userId: user.id,
//       },
//     })
//     const serializedUser = JSON.parse(JSON.stringify(user))
//     return { user, shop }
//   } catch (error) {
//     console.log('load user error', error)
//   }
// }
