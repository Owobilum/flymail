import { FC } from 'react'
import { motion } from 'framer-motion'

import Container from '@/components/container'
import Slider from '@/components/slider'
import Testimonial from './Testimonial'
import { fromBottomAnimation } from '@/utils/animations'

const Testimonials: FC = () => {
  return (
    <section>
      <Container className="py-5 lg:py-10">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            className="mb-4 font-lato text-3xl font-bold lg:text-[3.325rem] lg:leading-[3.75rem]"
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Trusted By Product Teams
          </motion.h2>
          <motion.p
            className="max-w-[18.75rem] font-lato text-[#5E5D5D] md:max-w-[34.375rem] lg:text-lg"
            variants={fromBottomAnimation}
            initial="initial"
            whileInView="final"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {' '}
            It Is One Of The Largest Saas Service Providers, With Over 422
            Million Monthly Active Users
          </motion.p>
        </div>
      </Container>
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: '20vw' }}
          whileInView={{ x: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <Slider items={testimonialsData}>
            {testimonialsData.map((testimonial, i) => (
              <Slider.Item key={i}>
                <Testimonial {...testimonial} />
              </Slider.Item>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

const testimonialsData = [
  {
    name: 'Jenny Wilson',
    position: 'VP of Marketing',
    img: '/images/woman.jpg',
    body: 'The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel.',
    color: '#f6df89',
  },
  {
    name: 'Lawrence Ikpebe',
    position: 'VP of Enjoyment',
    img: '/images/lawrence.jpeg',
    body: 'The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel, The better The Enjoyment.',
    color: '#fec0ab',
  },
  {
    name: 'Jenny Wilson',
    position: 'VP of Marketing',
    img: '/images/woman.jpg',
    body: 'The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel.',
    color: '#bed6e3',
  },
  {
    name: 'Jenny Wilson',
    position: 'VP of Marketing',
    img: '/images/woman.jpg',
    body: 'The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel.',
    color: '#f6df89',
  },
  {
    name: 'Jenny Wilson',
    position: 'VP of Marketing',
    img: '/images/woman.jpg',
    body: 'The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel.',
    color: '#fec0ab',
  },
]
