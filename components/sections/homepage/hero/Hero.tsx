import { FC } from 'react'
import { motion } from 'framer-motion'

import AnimatedLines from '@/components/icons/animated_lines'
import Button from '@/components/button'
import Container from '@/components/container'
import ImageGrid from './ImageGrid'
import {
  dodgeRight,
  dodgeTopRight,
  dodgeBottomRight,
  dodgeBottom,
  dodgeLeft,
  dodgeTopLeft,
  fromBottomAnimation,
} from '@/utils/animations'
import useButtonAnimation from '@/hooks/useMovement'

const MotionButton = motion(Button)

const Hero: FC = () => {
  const { movement, handleCurrentMovement } = useButtonAnimation()

  return (
    <Container className="bg-secondary py-8 xl:h-[88vh] 3xl:h-full 3xl:py-24">
      <section className="flex  flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="flex flex-col justify-center lg:max-w-[25rem] xl:max-w-full xl:flex-1">
          <motion.h1
            variants={fromBottomAnimation}
            initial="initial"
            animate="final"
            transition={{ delay: 0.2 }}
            className="relative font-openSans text-[2.75rem] font-bold capitalize leading-[3.375rem] text-white lg:text-[4.5rem] lg:leading-[4.9rem] xl:text-[5.3125rem] xl:leading-[5.9375rem]"
          >
            personalize
            <br /> your outreach
            <AnimatedLines className="absolute -right-2 top-[40%] hidden h-14 w-14 md:block" />
          </motion.h1>
          <motion.p
            variants={fromBottomAnimation}
            initial="initial"
            animate="final"
            transition={{ delay: 0.3 }}
            className="py-[1.875rem] pb-[3.125rem] font-lato text-lg text-light_gray"
          >
            Stop Rushing - Centralize, Prioritize And Progress On Projects
            Across Apps On A Daily Basis. SaaS Ant Replaces All Those Apps.
          </motion.p>

          <motion.p
            variants={fromBottomAnimation}
            initial="initial"
            animate="final"
            transition={{ delay: 0.4 }}
          >
            <MotionButton
              className="my-1 mr-1 w-32 text-sm text-white hover:border-white  sm:mb-0 lg:mr-4"
              variant="contained"
              size="md"
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
              get ready
            </MotionButton>
            <MotionButton
              className="my-1 ml-1 w-32 border-white text-sm text-white hover:border-primary sm:mb-0 lg:ml-4"
              variant="outlined"
              colorScheme="primary"
              size="lg"
              onMouseLeave={handleCurrentMovement}
              variants={
                movement === 0
                  ? dodgeBottomRight
                  : movement === 1
                  ? dodgeRight
                  : dodgeTopRight
              }
              whileHover="animate"
            >
              learn more
            </MotionButton>
          </motion.p>
        </div>
        <div className="lg:scale-90 xl:flex-1 xl:scale-100">
          <ImageGrid />
        </div>
      </section>
    </Container>
  )
}

export default Hero
