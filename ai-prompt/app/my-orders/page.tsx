import { getUserOrders } from '@/actions/orders/getUserOrders'
import UserAllOrders from './_page'
import { getUser } from '@/actions/user/getUser'

const Page = async () => {
  const data = await getUserOrders()

  const userData = await getUser()

  return (
    <div className="">
      <UserAllOrders
        user={userData?.user}
        isSellerExist={userData?.shop ? true : false}
        data={data}
      />
    </div>
  )
}

export default Page
