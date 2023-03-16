import { FC } from 'react'

import Container from '@/components/container'
import Marquee from '@/components/marquee'
import MainContent from './MainContent'
import leaderImg from '@/public/images/leader.svg'
import squareSpaceImg from '@/public/images/squarespace.svg'
import cultureAmpImg from '@/public/images/culture_amp.svg'
import gumroadImg from '@/public/images/gumroad.svg'

const companies = [gumroadImg, squareSpaceImg, cultureAmpImg, leaderImg]

const EngageProspects: FC = () => {
  return (
    <Container className="py-20">
      <section className="flex flex-col gap-4 md:flex-row md:gap-0 ">
        <div className="font-lato lg:min-w-[22.5rem]">
          <span className="block text-[2rem] font-bold lg:text-[2.5rem] ">
            50,000+
          </span>{' '}
          <span className="text-[#5E5D5D] lg:text-lg">
            People Use Us For Anagen Their Team
          </span>
        </div>
        <div className="border-gray-400 md:border-l-2 md:pl-[10%]">
          <div className="pause-animations-on-children-on-hover max-w-full overflow-hidden">
            <Marquee images={companies} />
          </div>
        </div>
      </section>
      <MainContent />
    </Container>
  )
}

export default EngageProspects
