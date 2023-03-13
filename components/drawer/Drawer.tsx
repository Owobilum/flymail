import { FC } from 'react'
import { motion, Variants } from 'framer-motion'

import Nav from '@/components/nav'

const Drawer: FC = () => {
  return (
    <motion.div
      variants={drawerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-[6.25rem] right-0 left-0 flex flex-col items-center overflow-hidden bg-secondary_light lg:hidden"
    >
      <Nav />
      <button
        className="btn_contained h-11 w-[8.5625rem] font-openSans text-lg font-semibold capitalize text-white md:hidden 
          lg:h-14 lg:w-[8.9625rem]"
      >
        sign up
      </button>
    </motion.div>
  )
}

export default Drawer

const drawerVariants: Variants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: '100vh',
  },
}
