'use server'

import prisma from '@/lib/prismaDb'

export async function getPromptByCategories(promptCategories: string) {
  try {
    const prompt = await prisma.prompts.findMany({
      include: {
        orders: true,
        images: true,
        reviews: true,
        promptUrl: true,
      },
      where: {
        category: promptCategories,
      },
    })
    console.log(prompt)
    return prompt
  } catch (error) {
    console.log('get promtById error', error)
  }
}
