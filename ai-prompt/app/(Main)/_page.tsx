'use client'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import Image from 'next/image'
import About from '@/components/Route/About'
import { styles } from '@/utils/styles'
import PromptCard from '@/components/Prompts/PromptCard'
import BestSellers from '@/components/Shop/BestSellers'
import Future from '@/components/Route/Future'
import Partners from '@/components/Route/Partners'
import SellersBanner from '@/components/Shop/SellersBanner'
import { Divider } from '@nextui-org/react'
import Footer from '@/components/Layout/Footer'
import { User } from '@clerk/nextjs/server'

type Props = {
  user: User | undefined
  isSellerExist: boolean | undefined
  promptsData: any
}

const RoutePage = ({ user, isSellerExist, promptsData }: Props) => {
  const [isMounted, setIsMounted] = useState(false)
  //   const [user, setUSer] = useState<User | undefined>()
  //   const [isSellerExist, setIsSellerExist] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
    // userData()
  }, [isMounted])

  //   const userData = async () => {
  //     const data = await getUser()
  //     setUSer(data?.user)
  //     if (data?.shop) {
  //       setIsSellerExist(true)
  //     }
  //   }
  if (!isMounted) {
    return null
  }
  return (
    <>
      <div>
        <div className="banner">
          <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
          <Hero />
        </div>
        <Image
          src={'https://pixner.net/aikeu/assets/images/footer/shape-one.png'}
          width={120}
          height={120}
          alt=""
          className="absolute right-[-30px]"
        />
        <br />
        <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
          <About />
          <div>
            <h1 className={`${styles.heading} p-2 font-Monserrat`}>
              Latest Prompts
            </h1>
            <div className="w-full flex flex-wrap mt-5">
              {promptsData &&
                promptsData.map((prompt: any) => (
                  <div className="">
                    <PromptCard key={prompt.id} prompt={prompt} />
                  </div>
                ))}
            </div>
            <br />
            <BestSellers />
            <Future />
            <Partners />
            <SellersBanner />
            <br />
            <br />
            <Divider className="bg-[#ffffff23]" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default RoutePage
