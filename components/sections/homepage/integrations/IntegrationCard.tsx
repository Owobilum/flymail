import { FC } from 'react'
import Image from 'next/image'

interface Props {
  title: string
  body: string
  img: any
}

const IntegrationCard: FC<Props> = ({ title, body, img }) => {
  return (
    <div
      className="relative flex h-[16rem] w-[18rem] flex-col justify-between rounded-lg border-2 p-4 before:absolute 
    before:top-0 before:left-0 before:right-0 before:-z-10 before:h-0 before:rounded-lg before:bg-primary before:transition-all 
    before:duration-500 before:content-[''] hover:border-primary hover:before:h-full lg:p-6 [&>*]:hover:text-white"
    >
      <p className="w-fit bg-gray-100 p-2">
        <Image
          alt="slack"
          src={img}
          height={35}
          width={34}
          className="transition-transform hover:scale-125"
        />{' '}
      </p>
      <p className="font-lato text-[#6E6D7F] lg:text-lg">
        {' '}
        <span className="font-bold capitalize text-[#000230] hover:text-black">
          {title} -{' '}
        </span>
        {body}
      </p>
      <p className="text-[#A29D9F] underline">Read More</p>
    </div>
  )
}

export default IntegrationCard
