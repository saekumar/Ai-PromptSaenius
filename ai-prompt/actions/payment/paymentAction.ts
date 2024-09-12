'use server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// Send Stripe publishable key
export const stripePublishableKey = () => {
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY
  return publishableKey
}

// Send Stripe payment intent
export const stripePaymentIntent = async ({ amount }: { amount: number }) => {
  try {
    // Generate a random description
    const descriptions = [
      'Payment for services rendered',
      'Export transaction for digital goods',
      'Online course fee',
      'Subscription payment',
      'Payment for consultation services',
      'Product purchase',
    ]
    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)]

    // Add customer name and address as required by Indian regulations
    const customerInfo = {
      name: 'John Doe',
      address: {
        line1: '1234 Main St',
        city: 'New Delhi',
        state: 'Delhi',
        postal_code: '110001',
        country: 'IN',
      },
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'INR',
      description: randomDescription, // Add the random description
      metadata: {
        company: 'SaeNius',
      },
      automatic_payment_methods: {
        enabled: true,
      },
      shipping: {
        // Adding shipping details (name and address)
        name: customerInfo.name,
        address: customerInfo.address,
      },
    })

    return paymentIntent
  } catch (error) {
    console.error(error)
    throw error
  }
}
