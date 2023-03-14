import { FC } from 'react'
import { motion, Variants } from 'framer-motion'

import Button from '@/components/button'
import Nav from '@/components/nav'

const Drawer: FC = () => {
  return (
    <motion.div
      variants={drawerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-[6.25rem] right-0 left-0 z-50 flex flex-col items-center overflow-hidden bg-secondary_light lg:hidden"
    >
      <Nav />
      <Button size="sm">sign up</Button>
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
