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
      className={`lg:hidden fixed top-[6.25rem] right-0 left-0 bg-secondary_light overflow-hidden flex items-center flex-col`}
    >
      <Nav />
      <button
        className="btn_contained md:hidden text-lg capitalize w-[8.5625rem] h-11 lg:w-[8.9625rem] lg:h-14 text-white 
          font-openSans font-semibold"
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
