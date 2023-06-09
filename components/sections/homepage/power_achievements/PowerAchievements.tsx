import { FC, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Achievement from './Achievement'
import Container from '@/components/container'
import LightBox from '@/components/lightbox'
import waveImg from '@/public/images/water_wave.svg'
import starIcon from '@/public/images/icons/star.svg'
import completeIcon from '@/public/images/icons/complete.svg'
import userIcon from '@/public/images/icons/user.svg'
import ribbonIcon from '@/public/images/icons/ribbon.svg'
import { fromBottomAnimation } from '@/utils/animations'

const MotionAchievement = motion(Achievement)

const PowerAchievements: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const renderedAchievements = achievementsData.map((achievement, i) => (
    <MotionAchievement
      key={i}
      {...achievement}
      variants={fromBottomAnimation}
      initial="initial"
      whileInView="final"
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
    />
  ))

  return (
    <>
      <Container className="bg-[#f9f9f9]  py-5 lg:py-10">
        <section className="flex w-full flex-col gap-8 lg:flex-row lg:gap-24">
          <div className="lg:flex-1">
            <motion.h2
              className="max-w-[25rem] font-lato text-3xl font-bold lg:text-[3.325rem] lg:leading-[3.75rem]"
              variants={fromBottomAnimation}
              initial="initial"
              whileInView="final"
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Power Achievements
            </motion.h2>
            <motion.div
              className="relative pt-[5.1875rem] lg:pt-[11.5rem]"
              variants={fromBottomAnimation}
              initial="initial"
              whileInView="final"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-8 left-8 z-20 rounded-xl lg:left-12 lg:bottom-12">
                <LightBox setIsOpen={setIsOpen} thumbnail="/images/js.jpg" />
              </div>
              <Image alt="wave" src={waveImg} />
            </motion.div>
          </div>

          <div className="flex flex-col justify-between lg:flex-1 lg:pb-[5%]">
            {' '}
            <motion.p
              className="mb-4 font-lato text-[#5E5D5D] lg:text-lg"
              variants={fromBottomAnimation}
              initial="initial"
              whileInView="final"
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              An Achievement Is A Great Accomplishment—Something Achieved With
              Great Effort Or Skill. Achieve And Achievement Often Imply The
              Completion Of Something
            </motion.p>
            <div className="flex flex-col flex-wrap gap-y-4 md:flex-row lg:gap-8 lg:gap-x-2 xl:gap-x-10">
              {renderedAchievements}
            </div>
          </div>
        </section>
      </Container>
      <AnimatePresence>
        {isOpen && (
          <LightBox.Modal setIsOpen={setIsOpen}>
            <iframe
              src="https://www.youtube.com/embed/lkIFF4maKMU?autoplay=1&controls=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </LightBox.Modal>
        )}
      </AnimatePresence>
    </>
  )
}

export default PowerAchievements

const achievementsData = [
  {
    title: 'active users',
    figure: '4M+',
    icon: starIcon,
    iconColor: undefined,
  },
  {
    title: 'completed sites',
    figure: '150K',
    icon: completeIcon,
    iconColor: 'bg-[#7f9dff]',
  },
  {
    title: 'user reviews',
    figure: '30M+',
    icon: userIcon,
    iconColor: 'bg-[#ffc73a]',
  },
  {
    title: 'awards',
    figure: '1K+',
    icon: ribbonIcon,
    iconColor: 'bg-[#3ac4e5]',
  },
]
