import React from 'react'
import MarketPlaceRouter from './_page'
import { getUser } from '@/actions/user/getUser'
type Props = {}

const Page = async (props: Props) => {
  const userData = await getUser()

  return (
    <MarketPlaceRouter
      user={userData?.user}
      isSellerExist={userData?.shop ? true : false}
    />
  )
}

export default Page
