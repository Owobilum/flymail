import { FC } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import AnimatedArrow from '@/components/icons/animated_arrow'

const MotionImage = motion(Image)

const ImageGrid: FC = () => {
  const imgVariants: Variants = {
    animate: {
      y: [10, -10, 12],
    },
  }

  return (
    <div className="relative grid h-full w-full grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2 md:grid-rows-2">
      {' '}
      <div className="col-span-1 row-span-1 flex items-end justify-end">
        <div className="relative h-[12.5rem] w-[11.3125rem]">
          <MotionImage
            alt=""
            src="/images/audience_builder.png"
            fill
            className="rounded-lg"
            variants={imgVariants}
            animate="animate"
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeOut' }}
          />
        </div>
      </div>
      <div className="relative col-span-1 row-span-1 flex items-end gap-x-4">
        <div className="relative h-[11.0625rem] w-[11.0625rem]">
          <MotionImage
            alt=""
            src="/images/profile.svg"
            fill
            className="rounded-lg object-cover object-center"
            variants={imgVariants}
            animate="animate"
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeOut' }}
          />
        </div>
        <AnimatedArrow />
      </div>
      <div className="col-span-1 row-span-1 flex justify-end">
        {' '}
        <div className="relative  h-[11.0625rem] w-[10.3125rem] ">
          <MotionImage
            alt=""
            src="/images/send.svg"
            fill
            variants={imgVariants}
            className="rounded-lg"
            animate="animate"
            transition={{ repeat: Infinity, duration: 4, ease: 'easeOut' }}
          />
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <div className="relative  h-[15.3938rem] w-[18.0313rem] ">
          <MotionImage
            alt=""
            src="/images/profiles.png"
            fill
            className="rounded-lg"
            variants={imgVariants}
            animate="animate"
            transition={{ repeat: Infinity, duration: 4, ease: 'easeOut' }}
          />
        </div>
      </div>
      <div className="absolute left-[45%] top-[42%] grid h-[5.625rem] w-[5.625rem] place-items-center rounded-full bg-primary">
        <Image src="/images/kite.svg" width={39} height={39} alt="" />
      </div>
    </div>
  )
}

export default ImageGrid
