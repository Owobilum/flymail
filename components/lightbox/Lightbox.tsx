import { Dispatch, FC, ReactElement, ReactNode, SetStateAction } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { fromTopAnimation } from '@/utils/animations'
import ModalBase from '@/components/modal_base'
import playIcon from '@/public/images/icons/play-52.png'

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  thumbnail: string
}

function LightBox({ setIsOpen, thumbnail }: Props): ReactElement {
  const handleOpen = () => setIsOpen(true)

  return (
    <div
      className="relative grid h-[11.875rem] w-[300px] place-items-center rounded-xl bg-blue-300 sm:h-[17.25rem] sm:w-[30.25rem] 
    lg:h-[19rem] lg:w-[29.875rem]  xl:h-[20rem] xl:w-[34.875rem]"
    >
      <Image
        alt="video_thumbnail"
        src={thumbnail}
        fill
        className="rounded-xl"
      />
      <button
        aria-label="play"
        className="absolute z-20 grid h-14 w-14 place-items-center rounded-full bg-primary transition-transform hover:scale-110 
        lg:h-20 lg:w-20"
        onClick={handleOpen}
      >
        <Image alt="play_icon" src={playIcon} className="block object-cover" />
      </button>
    </div>
  )
}

const LightBoxModal: FC<{
  children: ReactNode
  setIsOpen: Dispatch<SetStateAction<boolean>>
}> = ({ children, setIsOpen }) => {
  const handleClose = () => setIsOpen(false)

  return (
    <ModalBase>
      <motion.div
        className="w-full rounded-lg bg-transparent pb-8"
        variants={fromTopAnimation}
        initial="initial"
        animate="final"
        exit="initial"
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
        }}
      >
        <div className="flex justify-end text-white">
          <button
            className="mb-2  h-6 w-6 rounded-full bg-primary font-openSans text-base font-thin text-white transition-transform 
            hover:scale-110 lg:h-10 lg:w-10 lg:pb-0 lg:text-[1.5625rem]"
            onClick={handleClose}
            aria-label="close"
          >
            X
          </button>
        </div>
        <div className="flex w-full justify-center [&>*]:block [&>*]:min-h-[25rem] [&>*]:w-full [&>*]:lg:h-[38.4375rem] [&>*]:lg:w-[60rem]">
          {children}
        </div>
      </motion.div>
    </ModalBase>
  )
}

LightBox.Modal = LightBoxModal

export default LightBox
