import { FC } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import Button from '@/components/button'
import Container from '@/components/container'
import useMovement from '@/hooks/useMovement'
import {
  dodgeBottom,
  dodgeLeft,
  dodgeTopLeft,
  fromBottomAnimation,
} from '@/utils/animations'
import insightsImg from '@/public/images/insights.png'

const MotionButton = motion(Button)

const ControlUpdates: FC = () => {
  const { movement, handleCurrentMovement } = useMovement()

  return (
    <Container className="pt-14  pb-20 lg:pt-10">
      <section className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32">
        <motion.div
          className="relative h-[19.3125rem] w-[21.375rem] md:h-[26.9375rem] md:w-[29.8125rem] lg:flex-1"
          variants={fromBottomAnimation}
          initial="initial"
          whileInView="final"
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image alt="code" src="/images/code.svg" fill />

          <motion.div
            className="absolute -bottom-10 -right-2 h-[7.8rem] w-[12.0625rem] rounded-lg bg-transparent shadow-xl lg:-right-[2rem] lg:h-[15.0625rem] lg:w-[20rem]"
            variants={imgVariants}
            animate="animate"
          >
            <Image src={insightsImg} alt="engagements" />
          </motion.div>
        </motion.div>
        <div className="mt-4 space-y-4 lg:mt-0 lg:flex-1 lg:space-y-10">
          <motion.h2
            className="font-openSans text-3xl font-bold text-black lg:text-[3.325rem] lg:leading-[3.75rem]"
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Control Updates Within Your Codebase.{' '}
          </motion.h2>
          <motion.p
            className="font-lato text-[#5E5D5D] lg:text-lg"
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            As Practitioners Ourselves We Understand The Needs And Motivations
            Of Developers. Ternary Is Designed To Bring Everyone.
          </motion.p>
          <motion.p
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MotionButton
              variant="contained"
              colorScheme="primary"
              size="lg"
              className="text-white hover:text-primary"
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
              Get Ready
            </MotionButton>
          </motion.p>
        </div>
      </section>
    </Container>
  )
}

export default ControlUpdates

const imgVariants: Variants = {
  animate: {
    x: [5, -5],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: 'easeOut',
      repeatType: 'reverse',
      type: 'tween',
      repeatDelay: 0.25,
    },
  },
}
