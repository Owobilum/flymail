import { FC } from 'react'
import Image from 'next/image'

const Marquee: FC<{ images: any[] }> = ({ images }) => (
  <div className="relative flex w-[200%]  animate-marquee flex-nowrap overflow-hidden py-4">
    <div className="flex w-full gap-x-10 overflow-hidden lg:justify-evenly">
      {images?.length &&
        images.map((company, i) => (
          <Image key={i} alt="" src={company} className="static block" />
        ))}
    </div>
    <div className=" hidden w-full gap-x-10 overflow-hidden lg:flex lg:justify-evenly">
      {images?.length &&
        images.map((company, i) => (
          <Image key={i} alt="" src={company} className="static block" />
        ))}
    </div>
  </div>
)

export default Marquee
