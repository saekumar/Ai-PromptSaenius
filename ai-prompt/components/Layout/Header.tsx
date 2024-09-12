import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'
import { UserButton, UserProfile } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { Avatar } from '@nextui-org/react'
import DropDown from './DropDown'
import { RxCross1 } from 'react-icons/rx'
type Props = {
  activeItem: number
  user: User | undefined
  isSellerExist: boolean | undefined
}

const Header = ({ activeItem, user, isSellerExist }: Props) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const [activeProfile, setActiveProfile] = useState(false)

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'screen') {
      setOpen(!open)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }

  const handleProfile = () => {
    setActiveProfile(!activeProfile)
  }

  return (
    <div
      className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
        active && 'fixed top-0 left-0 bg-[#000] z-[9999]'
      }`}
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div className="">
          <Link href={'/'}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <span className="text-[#64ff4c]">Sae</span>Nius
            </h1>
          </Link>
        </div>

        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
        <div className="flex items-center ml-10">
          <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer" />

          {user ? (
            <div className="">
              <DropDown
                user={user}
                setOpen={setOpen}
                handleProfile={handleProfile}
                isSellerExist={isSellerExist}
              />
            </div>
          ) : (
            <Link href="/sign-in">
              <CgProfile className="text-[25px] cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      {activeProfile && (
        <div className="w-full fixed h-screen overflow-hidden flex justify-center items-center top-0 left-0 bg-[#00000068] z-[9999]">
          <div className="w-min relative h-[90vh] overflow-y-scroll bg-white rounded-xl shadow">
            <UserProfile />
            <RxCross1
              className="absolute text-black text-2xl top-10 right-10 cursor-pointer"
              onClick={handleProfile}
            />
          </div>
        </div>
      )}
      <div className="w-full md:hidden flex items-center justify-between">
        <div>
          <Link href="/">
            <h1>
              <Link href={'/'}>
                <h1 className="font-Inter text-3xl cursor-pointer">
                  <span className="text-[#64ff4c]">Sae</span>Nius
                </h1>
              </Link>
            </h1>
          </Link>
        </div>
        <div>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div
            className="fixed md:hidden w-full h-screen top-0 left-0 z-[9999] bg-[unset] "
            onClick={handleClose}
            id="screen"
          >
            <div className="flex flex-col fixed bg-black h-screen top-0 right-0 w-[60%] z-[9999] ">
              <div className="mt-20 p-5">
                <Navigation activeItem={activeItem} />
                <Link href="/sign-in">
                  {user ? null : (
                    <CgProfile className={`text-[25px] cursor-pointer`} />
                  )}
                </Link>

                {user && (
                  <DropDown
                    user={user}
                    setOpen={setOpen}
                    handleProfile={handleProfile}
                    isSellerExist={isSellerExist}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
