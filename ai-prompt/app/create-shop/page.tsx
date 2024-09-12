'use client'
import { useUser } from '@clerk/nextjs'
import { styles } from '@/utils/styles'
import { Button, Input, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

type Props = {}

const page = (props: Props) => {
  const { user } = useUser()
  const [loading, setLoading] = useState(false)
  const [shopData, setShopData] = useState({
    name: '',
    description: '',
    shopProductType: '',
    avatar: '',
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (user) {
      const data = {
        name: shopData.name,

        description: shopData.description,

        avatar: user?.imageUrl || '',
        userId: user?.id,
      }
      await axios
        .post('/api/create-shop', data)
        .then((res) => {
          setLoading(false)
          toast.success('Shop created successfully..')
          setShopData({
            name: '',
            description: '',
            shopProductType: '',
            avatar: '',
          })
        })
        .catch((error) => {
          setLoading(false)
          toast.error(error.response.data)
          setShopData({
            name: '',
            description: '',
            shopProductType: '',
            avatar: '',
          })
        })
    }
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="">
        <h1 className={`${styles.heading} text-center font-Monserrat`}>
          Start selling with us
        </h1>
        <form
          className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full my-5">
            <label className={`${styles.label} mb-2 block`}>Shop Name</label>
            <Input
              isRequired
              type="name"
              value={shopData.name}
              onChange={(e) =>
                setShopData({ ...shopData, name: e.target.value })
              }
              label="SaeNius"
              size="sm"
              variant="bordered"
            />
          </div>
          <div className="w-full my-5">
            <label className={`${styles.label} mb-2 block`}>
              Shop Description (Max 120 letters)
            </label>
            <Input
              isRequired
              type="text"
              label="lorem ipsum"
              value={shopData.description}
              onChange={(e) =>
                setShopData({ ...shopData, description: e.target.value })
              }
              size="sm"
              maxLength={120}
              variant="bordered"
            />
          </div>
          <div className="w-full my-5">
            <label className={`${styles.label} mb-2 block`}>
              What you wanna sell with us ?
            </label>
            <Textarea
              variant="bordered"
              value={shopData.shopProductType}
              onChange={(e) =>
                setShopData({ ...shopData, shopProductType: e.target.value })
              }
              required
              placeholder="Chatgpt,Midjourney prompts,Bard prompts..."
              className="col-span-12 md:col-span-6 md:mb-0"
            />
            <br />
            <Button
              className="mb-3 w-full bg-transparent h-[45px] border border-[#16c252] text-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]"
              type="submit"
              disabled={loading}
              disableAnimation={loading}
            >
              Create Shop
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
