import AllPrompts from '@/components/Prompts/AllPrompts'
import ShopSidebar from '@/components/Shop/ShopSidebar'
import { getAllPromptsByShop } from '@/actions/shop/getAllPromptsByShop'

const Page = async () => {
  const promptsData = await getAllPromptsByShop()
  console.log(promptsData)
  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={2} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%] p-5">
        <AllPrompts promptsData={promptsData} />
      </div>
    </div>
  )
}

export default Page
