import React from 'react'
import Link from 'next/link'
type Props = {
  activeItem: number
}

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Market',
    href: '/marketplace',
  },
  {
    title: 'Conatct Us',
    href: '/contact',
  },
  // {
  //   title: 'Policy',
  //   href: '/policy',
  // },
]

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="flex flex-col md:flex-row">
      {navItems.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`inline-block md:px-4 xl:py-8 py-5 md:py-0 text-[18px] cursor-pointer font-[500] font-Inter  ${
              activeItem === index && 'text-[#6dff4b]'
            } `}
          >
            <span className="">
              <Link href={item.href}>{item.title}</Link>
            </span>
          </h5>
        </Link>
      ))}
    </div>
  )
}

export default Navigation
