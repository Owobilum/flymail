import { FC } from 'react'
import Image from 'next/image'

import { QuoteIcon } from '@/components/icons/quote'

interface Props {
  name: string
  position: string
  img: string
  body: string
  color: string
}

const Testimonial: FC<Props> = (props) => {
  const { body, color, img, name, position } = props

  return (
    <div
      className="relative flex h-[12.5rem] w-full justify-center rounded-xl"
      style={{
        backgroundImage: "url('/images/zig-zag-t.svg')",
        backgroundColor: color,
      }}
    >
      <div className="absolute bottom-6 z-20 h-[15.6875rem] w-[90%] rounded-xl bg-white p-4 shadow-lg lg:p-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            {' '}
            <div>
              <Image
                alt="user"
                src={img}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-lato font-bold text-[#000230] lg:text-[1.25rem] lg:leading-7">
                {name}
              </p>
              <p className="font-lato text-sm text-[#667085]">{position}</p>
            </div>
          </div>
          <div>
            <QuoteIcon fill={color} />
          </div>
        </div>
        <div className="mt-4 font-lato text-[#000230] lg:mt-6 lg:text-[1.25rem] lg:leading-7">
          {`”${body}”`}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
