import { FC } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import Button from '@/components/button'
import { CheckIcon } from '@/components/icons/check'
import IconItem from '@/components/icon_item'
import Container from '@/components/container'
import useMovement from '@/hooks/useMovement'
import {
  dodgeBottom,
  dodgeLeft,
  dodgeTopLeft,
  fromBottomAnimation,
} from '@/utils/animations'
import zigzagImg from '@/public/images/zig-zag.svg'
import insightsImg from '@/public/images/insights.png'
import insights2Img from '@/public/images/insights2.png'

const MotionButton = motion(Button)
const MotionImage = motion(Image)

const Insights: FC = () => {
  const { movement, handleCurrentMovement } = useMovement()

  return (
    <Container className="pt-14 pb-5 lg:py-10">
      <section className="flex flex-col items-center gap-8 pl-2 lg:flex-row lg:gap-32 lg:pl-[8rem]">
        <motion.div
          className="relative w-fit"
          variants={fromBottomAnimation}
          initial="initial"
          whileInView="final"
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid w-full place-items-center overflow-hidden rounded-xl bg-[#FFC0AC] md:h-[21.0625rem] md:w-[386px]">
            <MotionImage
              alt="zigzag_bg"
              src={zigzagImg}
              variants={imgVariants}
              whileInView="animate"
              viewport={{ amount: 0.4, once: false }}
            />
          </div>
          <motion.div
            className="absolute -top-10 -left-2 h-[7.8rem] w-[12.0625rem] rounded-lg bg-transparent shadow-xl lg:-left-[8rem] lg:h-[15.6875rem] lg:w-[24.0625rem]"
            variants={engagementVariants}
            animate="animate"
          >
            <Image src={insightsImg} alt="engagements" />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -right-6 h-[3.625rem] w-[7.0625rem] bg-transparent shadow-xl lg:-bottom-12 lg:h-[9rem] lg:w-[12.875rem]"
            variants={engagementVariants2}
            animate="animate"
          >
            <Image src={insights2Img} alt="engagements" />
          </motion.div>
        </motion.div>
        <div className="mt-4 space-y-4 lg:mt-0 lg:space-y-10">
          <motion.h2
            className="font-openSans text-3xl font-bold text-black lg:text-[3.325rem] lg:leading-[3.75rem]"
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Insights To Drive Revenue Growth{' '}
          </motion.h2>
          <motion.p
            className="font-lato text-[#5E5D5D] lg:text-lg"
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Create An Environment That Attracts Because It&apos;s Flexible,
            Collaborative And Continuously Serves Human Needs
          </motion.p>
          <motion.div
            className="space-y-4 lg:space-y-6"
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <IconItem icon={<CheckIcon />}>
              Easily Searchable Skills And Ownership Tags
            </IconItem>
            <IconItem icon={<CheckIcon />}>
              Track Employee Achievements
            </IconItem>
            <IconItem icon={<CheckIcon />}>Global Employee Map View</IconItem>
          </motion.div>
          <motion.div
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.4 }}
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
      </section>
    </Container>
  )
}

export default Insights

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
    y: [10, -8],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeOut',
      repeatType: 'reverse',
      type: 'tween',
      repeatDelay: 0.5,
    },
  },
}
const engagementVariants2: Variants = {
  animate: {
    y: [9, -7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeOut',
      repeatType: 'reverse',
      type: 'tween',
    },
  },
}
