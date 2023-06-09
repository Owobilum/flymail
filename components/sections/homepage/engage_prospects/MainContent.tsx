import { FC } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import Button from '@/components/button'
import useMovement from '@/hooks/useMovement'
import {
  dodgeBottom,
  dodgeLeft,
  dodgeTopLeft,
  fromBottomAnimation,
} from '@/utils/animations'
import engage from '@/public/images/engage.svg'
import engage2 from '@/public/images/engage2.svg'
import girlImg from '@/public/images/excited-blond-girl.png'

const MotionButton = motion(Button)
const MotionImage = motion(Image)

const MainContent: FC = () => {
  const { movement, handleCurrentMovement } = useMovement()

  const imgVariants: Variants = {
    animate: {
      scale: 1.25,
      transition: {
        type: 'spring',
      },
    },
  }
  const engagementVariants: Variants = {
    animate: {
      y: [20, -15],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeOut',
        repeatType: 'reverse',
        type: 'tween',
      },
    },
  }
  const engagement2Variants: Variants = {
    animate: {
      x: [15, -15],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeOut',
        repeatType: 'reverse',
        type: 'tween',
      },
    },
  }

  // const imgBoxVariants: Variants = {
  //   initial: { height: 0 },
  //   final: { height: 400, transition: { duration: 1.5, delay: 4 } },
  // }

  const imgBoxVariants: Variants = {
    initial: {
      transform: 'translateY(10%)',
      opacity: 0,
    },
    final: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  }

  return (
    <div className="flex flex-col items-center gap-8 pt-24 lg:flex-row lg:gap-32 lg:pt-36">
      <motion.div
        className="relative w-fit"
        variants={fromBottomAnimation}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid w-full place-items-center overflow-hidden rounded-xl bg-[#F6E186] md:h-[30.75rem] md:w-[32.5rem]">
          <MotionImage
            alt="excited_girl"
            src={girlImg}
            variants={imgVariants}
            whileInView="animate"
            viewport={{ amount: 0.4, once: false }}
          />
        </div>
        <motion.div
          className="absolute -top-10 -right-2 h-[9.75rem] w-[8.375rem] rounded-lg bg-transparent shadow-xl md:-right-10"
          variants={engagementVariants}
          animate="animate"
        >
          <Image src={engage} alt="engagements" className="" />
        </motion.div>
        <motion.div
          className="absolute bottom-4 -left-6 h-[5.625rem] w-[13.0625rem] bg-transparent shadow-xl"
          variants={engagement2Variants}
          animate="animate"
        >
          <Image src={engage2} alt="engagements" />
        </motion.div>
      </motion.div>

      <div className="space-y-4 lg:space-y-10">
        <motion.h2
          className="font-openSans text-3xl font-bold text-black lg:text-[3.325rem] lg:leading-[3.75rem]"
          variants={fromBottomAnimation}
          initial="initial"
          whileInView="final"
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Engage Your Prospects Wherever They Are.
        </motion.h2>
        <motion.p
          className="font-lato text-[#5E5D5D] lg:text-lg"
          variants={fromBottomAnimation}
          initial="initial"
          whileInView="final"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Saasant Replaces All Those Apps And Complicated Invoicing Tools That
          Made It Challenging To Keep Track Of All Your Customers.
        </motion.p>
        <motion.div
          variants={fromBottomAnimation}
          initial="initial"
          whileInView="final"
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MotionButton
            variant="outlined"
            colorScheme="primary"
            size="lg"
            className="text-primary hover:text-white"
            onMouseLeave={handleCurrentMovement}
            variants={
              movement === 0
                ? dodgeBottom
                : movement === 1
                ? dodgeLeft
                : dodgeTopLeft
            }
            whileHover="animate"
          >
            learn more
          </MotionButton>
        </motion.div>
      </div>
    </div>
  )
}

export default MainContent
