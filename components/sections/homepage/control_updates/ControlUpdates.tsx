import { FC } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import Button from '@/components/button'
import Container from '@/components/container'
import useMovement from '@/hooks/useMovement'
import { dodgeBottom, dodgeLeft, dodgeTopLeft } from '@/utils/animations'
import insightsImg from '@/public/images/insights.png'

const MotionButton = motion(Button)

const ControlUpdates: FC = () => {
  const { movement, handleCurrentMovement } = useMovement()

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

  return (
    <Container className="pt-14  pb-20 lg:pt-10">
      <section className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32">
        <div className="relative h-[19.3125rem] w-[21.375rem] md:h-[26.9375rem] md:w-[29.8125rem] lg:flex-1">
          <Image alt="code" src="/images/code.svg" fill />

          <motion.div
            className="absolute -bottom-10 -right-2 h-[7.8rem] w-[12.0625rem] rounded-lg bg-transparent shadow-xl lg:-right-[2rem] lg:h-[15.0625rem] lg:w-[20rem]"
            variants={imgVariants}
            animate="animate"
          >
            <Image src={insightsImg} alt="engagements" />
          </motion.div>
        </div>
        <div className="mt-4 space-y-4 lg:mt-0 lg:flex-1 lg:space-y-10">
          <h2 className="font-openSans text-3xl font-bold text-black lg:text-[3.325rem] lg:leading-[3.75rem]">
            Control Updates Within Your Codebase.{' '}
          </h2>
          <p className="font-lato text-[#5E5D5D] lg:text-lg">
            As Practitioners Ourselves We Understand The Needs And Motivations
            Of Developers. Ternary Is Designed To Bring Everyone.
          </p>
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
        </div>
      </section>
    </Container>
  )
}

export default ControlUpdates
