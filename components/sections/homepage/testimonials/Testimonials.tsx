import { FC } from 'react'

import Container from '@/components/container'
import Slider from '@/components/slider'
import Testimonial from './Testimonial'

const Testimonials: FC = () => {
  return (
    <section>
      <Container className="py-5 lg:py-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 font-lato text-3xl font-bold lg:text-[3.325rem] lg:leading-[3.75rem]">
            Trusted By Product Teams
          </h2>
          <p className="max-w-[18.75rem] font-lato text-[#5E5D5D] md:max-w-[34.375rem] lg:text-lg">
            {' '}
            It Is One Of The Largest Saas Service Providers, With Over 422
            Million Monthly Active Users
          </p>
        </div>
      </Container>
      <div>
        <Slider items={testimonialsData}>
          {testimonialsData.map((testimonial, i) => (
            <Slider.Item key={i}>
              <Testimonial {...testimonial} />
            </Slider.Item>
          ))}
        </Slider>
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
