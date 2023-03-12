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
    <Container className="bg-secondary border-b border-secondary_light relative">
      <header className="flex justify-between items-center py-[1.5625rem]">
        <Image alt="flymail_logo" src={logo} className="block cursor-pointer" />
        <Nav className="hidden lg:block" />
        <div className="flex gap-12">
          <button
            className="btn_contained hidden md:block text-lg capitalize w-[8.5625rem] h-11 lg:w-[8.9625rem] lg:h-14 text-white 
          font-openSans font-semibold"
          >
            sign up
          </button>
          <button
            className="lg:hidden grid place-items-center h-[3.125rem] w-[3.125rem] border border-white rounded-lg"
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
