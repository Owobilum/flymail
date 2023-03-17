import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactElement } from 'react'
import Image from 'next/image'

import { dodgeBottom, dodgeLeft, dodgeTopLeft } from '@/utils/animations'
import Button from '@/components/button'
import useMovement from '@/hooks/useMovement'
import Container from '@/components/container'
import iconsImg from '@/public/images/icon_reel.svg'

const MotionButton = motion(Button)

function Create(): ReactElement {
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 2000], [0, 360], { clamp: false })
  const { movement, handleCurrentMovement } = useMovement()

  return (
    <Container className="py-5 lg:py-10">
      <section className="flex flex-col items-center gap-8  lg:flex-row lg:gap-32">
        <div className="space-y-4 lg:space-y-10">
          <h2 className="font-openSans text-3xl font-bold text-black lg:text-[3.325rem] lg:leading-[3.75rem]">
            Create Once, Share Everywhere.{' '}
          </h2>
          <p className="font-lato text-[#5E5D5D] lg:text-lg">
            Easily Create Reusable Payment Links That You Can Share With Your
            Customers Through Email, Text Message, Social Media.
          </p>
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
        </div>
        <div className="relative w-fit">
          <div className="grid w-full place-items-center overflow-hidden  rounded-xl bg-[#BBD7E7] md:h-[37rem] md:w-[37rem] lg:h-[32rem] lg:w-[32rem] xl:h-[37rem] xl:w-[37rem]">
            <motion.div
              style={{ rotate }}
              className="grid h-[95%] w-[95%] place-items-center rounded-full bg-[#8cbfdc]/50"
            >
              <div className="h-[80%], w-[80%] overflow-hidden rounded-full bg-[#BBD7E7] p-4 lg:p-8">
                {' '}
                <Image alt="icons" src={iconsImg} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Create
