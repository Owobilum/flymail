import { FC, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'

import Container from '@/components/container'
import Drawer from '@/components/drawer'
import logo from '@/public/images/logo.svg'
import Nav from '@/components/nav'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container className="relative border-b border-secondary_light bg-secondary">
      <header className="flex items-center justify-between py-[1.5625rem]">
        <Image alt="flymail_logo" src={logo} className="block cursor-pointer" />
        <Nav className="hidden lg:block" />
        <div className="flex gap-12">
          <button
            className="btn_contained hidden h-11 w-[8.5625rem] font-openSans text-lg font-semibold capitalize text-white md:block 
          lg:h-14 lg:w-[8.9625rem]"
          >
            sign up
          </button>
          <button
            className="grid h-[3.125rem] w-[3.125rem] place-items-center rounded-lg border border-white lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              viewBox="0 0 100 80"
              width="24"
              height="24"
              fill="#fff"
              aria-label="hamburger menu"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </button>
        </div>
      </header>
      <AnimatePresence>{isOpen && <Drawer />}</AnimatePresence>
    </Container>
  )
}

export default Header