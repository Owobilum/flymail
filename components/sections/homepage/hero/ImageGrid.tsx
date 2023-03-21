import { FC } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import AnimatedArrow from '@/components/icons/animated_arrow'
import { scaleAnimation } from '@/utils/animations'

const MotionImage = motion(Image)

const ImageGrid: FC = () => (
  <div className="relative grid h-full w-full grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2 md:grid-rows-2">
    {' '}
    <div className="col-span-1 row-span-1 flex items-end justify-end">
      <motion.div
        className="relative h-[12.5rem] w-[11.3125rem]"
        variants={scaleAnimation}
        initial="initial"
        animate="final"
        transition={{ duration: 0.8 }}
      >
        <MotionImage
          alt=""
          src="/images/audience_builder.png"
          fill
          className="rounded-lg"
          variants={imgVariants}
          animate="animate"
          transition={{ repeat: Infinity, duration: 5.5, ease: 'easeOut' }}
        />
      </motion.div>
    </div>
    <div className="relative col-span-1 row-span-1 flex items-end gap-x-4">
      <motion.div
        className="relative h-[11.0625rem] w-[11.0625rem]"
        variants={scaleAnimation}
        initial="initial"
        animate="final"
        transition={{ duration: 0.8 }}
      >
        <MotionImage
          alt=""
          src="/images/profile.svg"
          fill
          className="rounded-lg object-cover object-center"
          variants={imgVariants}
          animate="animate"
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeOut' }}
        />
      </motion.div>
      <AnimatedArrow />
    </div>
    <div className="col-span-1 row-span-1 flex justify-end">
      {' '}
      <motion.div
        className="relative  h-[11.0625rem] w-[10.3125rem]"
        variants={scaleAnimation}
        initial="initial"
        animate="final"
        transition={{ duration: 0.8 }}
      >
        <MotionImage
          alt=""
          src="/images/send.svg"
          fill
          variants={imgVariants}
          className="rounded-lg"
          animate="animate"
          transition={{ repeat: Infinity, duration: 4, ease: 'easeOut' }}
        />
      </motion.div>
    </div>
    <div className="col-span-1 row-span-1">
      <motion.div
        className="relative  h-[15.3938rem] w-[18.0313rem]"
        variants={scaleAnimation}
        initial="initial"
        animate="final"
        transition={{ duration: 0.8 }}
      >
        <MotionImage
          alt=""
          src="/images/profiles.png"
          fill
          className="rounded-lg"
          variants={imgVariants}
          animate="animate"
          transition={{ repeat: Infinity, duration: 4, ease: 'easeOut' }}
        />
      </motion.div>
    </div>
    <motion.div
      className="absolute left-[45%] top-[42%] grid h-[5.625rem] w-[5.625rem] place-items-center rounded-full bg-primary"
      variants={kiteVariants}
      initial="initial"
      animate="animate"
    >
      <Image src="/images/kite.svg" width={39} height={39} alt="" />
    </motion.div>
  </div>
)

export default ImageGrid

const imgVariants: Variants = {
  animate: {
    y: [10, -10, 12],
  },
}

const kiteVariants: Variants = {
  initial: { x: '-50vw', y: '100vh', opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
}
