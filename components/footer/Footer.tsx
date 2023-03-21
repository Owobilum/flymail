import { FC, PropsWithChildren, ComponentProps, ReactNode } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Container from '@/components/container'
import logo from '@/public/images/logo.svg'
import RequestDemo from './RequestDemo'
import { FacebookIcon } from '@/components/icons/facebook'
import { InstagramIcon } from '@/components/icons/instagram'
import { TwitterIcon } from '@/components/icons/twitter'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { fromBottomAnimation } from '@/utils/animations'

const Link: FC<PropsWithChildren> = ({ children }) => (
  <p className="my-4 w-fit cursor-pointer font-lato text-white transition-transform hover:translate-x-3 hover:-translate-y-1 hover:text-primary lg:my-6 lg:text-lg">
    {children}
  </p>
)

type IconLinkProps = {
  children: ReactNode
} & ComponentProps<'a'>

const IconLink: FC<IconLinkProps> = ({ children, ...restProps }) => (
  <a {...restProps}>{children}</a>
)

const Footer: FC = () => {
  return (
    <Container className="relative  mt-20 bg-[#442b3d] pb-[2.5rem]">
      {' '}
      <footer className="pt-28 lg:pt-[12.75rem]">
        <div className="flex flex-col justify-between pb-[3.5rem] md:flex-row">
          {' '}
          <motion.div
            className="mb-6 space-y-2 text-[#cdcdcd] sm:mb-0 lg:space-y-4 lg:pt-10"
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              {' '}
              <Image
                alt="flymail_logo"
                src={logo}
                className="block cursor-pointer"
              />
            </p>
            <p>Binhan628@Email.Com</p>
            <p>948.148.149.948</p>
            <p>16/A, New York, US</p>
          </motion.div>
          <motion.div
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link>Home</Link>
            <Link>Products</Link>
            <Link>Membership</Link>
            <Link>About Us</Link>
          </motion.div>
          <motion.div
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link>About Us</Link>
            <Link>Legals</Link>
            <Link>Features</Link>
            <Link>Customer Service</Link>
          </motion.div>
          <motion.div
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link>FAQs</Link>
            <Link>Blog</Link>
            <Link>Pricing</Link>
            <Link>About Us</Link>
          </motion.div>
          <motion.div
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link>Our Location</Link>
            <Link>Careers</Link>
            <Link>Contact</Link>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col justify-between gap-4 border-t border-[#cdcdcd]/10 pt-[2.5rem] text-[#cdcdcd] 
        md:flex-row md:items-center"
          variants={fromBottomAnimation}
          initial="initial"
          whileInView="final"
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4 lg:gap-6">
            <IconLink href="#">
              <FacebookIcon />
            </IconLink>
            <IconLink href="#">
              <InstagramIcon />
            </IconLink>
            <IconLink href="#">
              <TwitterIcon />
            </IconLink>
            <IconLink href="#">
              <LinkedInIcon />
            </IconLink>
          </div>
          <div>
            Copyright © {new Date().getFullYear()} Musemind | All rights
            reserved.
          </div>
          <div className="w-fit cursor-pointer">Terms & Privacy Policy</div>
        </motion.div>
      </footer>
      <RequestDemo />
    </Container>
  )
}

export default Footer
