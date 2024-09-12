// import { newOrder } from '@/actions/orders/createOrder'
import { getUser } from '@/actions/user/getUser'
import { newOrder } from '@/actions/orders/createOrder'
import { styles } from '@/utils/styles'
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import React, { useState } from 'react'
interface User {
  id: string
  name: string
  email: string
}
const CheckoutForm = ({
  setOpen,
  open,
  promptData,
}: {
  setOpen: (open: boolean) => void
  open: boolean
  promptData: any
}) => {
  const [message, setMessage] = useState<any>('')
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }

    try {
      const userData = await getUser() // Await the getUserData() function call
      const userId = userData?.user?.id as string

      if (!userId) {
        return
      }

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      })

      if (error) {
        setMessage(error.message)
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        await newOrder({
          userId: userId, // Use userId obtained from getUserData()
          promptId: promptData.id,
          payment_id: paymentIntent.id,
          payment_method: paymentIntent.id!,
        }).then((res) => {
          setOpen(!open)
          window.location.reload()
        })
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error)
      // Handle error appropriately
    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement id="payment-element" />
      <button
        id="submit"
        className={`${styles.button} !bg-[crimson] mt-4 !p-2 !w-full`}
      >
        <span>Pay Now Rs.{promptData?.price}</span>
      </button>
      {/* Show amy error or success message */}
      {message && (
        <div id="payment-message" className="text-[red] font-Poppins pt-2">
          {message}
        </div>
      )}
    </form>
  )
}

export default CheckoutForm
