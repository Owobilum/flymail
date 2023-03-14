import { FC, useState } from 'react'
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
} from '@/utils/animations'

const MotionButton = motion(Button)

const Hero: FC = () => {
  const [movement, setMovement] = useState(1)

  const handleCurrentMovement = () => setMovement(Math.floor(Math.random() * 3))

  return (
    <Container className="bg-secondary py-20">
      <section className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="flex flex-col justify-center lg:max-w-[400px] xl:max-w-full xl:flex-1">
          <h1 className="relative font-openSans text-[2.75rem] font-bold capitalize leading-[3.375rem] text-white lg:text-[4.5rem] lg:leading-[4.9rem] xl:text-[5.3125rem] xl:leading-[5.9375rem]">
            personalize your outreach
            <AnimatedLines className="absolute -right-2 top-[40%] hidden h-14 w-14 md:block" />
          </h1>
          <p className="py-[1.875rem] pb-[3.125rem] font-lato text-lg text-light_gray">
            Stop Rushing - Centralize, Prioritize And Progress On Projects
            Across Apps On A Daily Basis. SaaS Ant Replaces All Those Apps.
          </p>

          <p>
            <MotionButton
              className="mr-1 w-32 text-sm hover:border-white sm:mb-0  lg:mr-4"
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
              className="ml-1 w-32 border-white text-sm hover:border-primary sm:mb-0 lg:ml-4"
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
          </p>
        </div>
        <div className="lg:scale-90 xl:flex-1 xl:scale-100">
          <ImageGrid />
        </div>
      </section>
    </Container>
  )
}

export default Hero
