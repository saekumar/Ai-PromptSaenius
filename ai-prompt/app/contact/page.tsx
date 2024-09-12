'use client'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import ShopBanner from '@/components/Shop/ShopBanner'
import { User } from '@clerk/nextjs/server'
import { Divider } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { propmt } from '@/@types/promptTypes'
import Loader from '@/utils/Loader'
import React, { Suspense, useRef } from 'react'
import emailjs from '@emailjs/browser'

import useAlert from '@/components/ContactComponents/Alert'
import { Link } from '@nextui-org/react'

const Page = ({}: {}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [isMounted])

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => {
    setCurrentAnimation('walk')
  }
  const handleBlur = () => {
    setCurrentAnimation('idle')
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    console.log(form.email)
    console.log(form.name)
    emailjs
      .send(
        'service_5vyphpw',
        'template_5vz4xba',
        {
          from_name: form.name,
          to_name: 'Saikumar',
          from_email: form.email,
          to_email: 'saikumarpuppala249@gmail.com',
          message: form.message,
        },
        'jeW0330zx30bPXiiO'
      )
      .then(() => {
        setIsLoading(false)
        showAlert({
          show: 'true',
          text: 'Message sent Successfully',
          type: 'success',
        })
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => {
          hideAlert()
          setCurrentAnimation('idle')
          setForm({ name: '', email: '', message: '' })
        })
      })
      .catch((error) => {
        setCurrentAnimation('idle')
        setIsLoading(false)
        showAlert({ show: 'true', text: 'Somethig went wrong', type: 'danger' })
      })
  }

  return (
    <>
      <div>
        <div className="shop-banner"></div>
        <div>
          <div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
            <Divider className="bg-[#ffffff14] mt-5" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
