import { FC } from 'react'
import Image from 'next/image'

const Achievement: FC<{
  title: string
  figure: string
  icon: any
  iconColor?: string
}> = (props) => {
  const { title, figure, icon, iconColor = 'bg-primary' } = props

  return (
    <div className="flex items-center gap-4 xl:gap-8">
      <div>
        {' '}
        <span
          className={`grid h-12 w-12 place-items-center rounded-full ${iconColor} xl:h-16 xl:w-16`}
        >
          <Image src={icon} alt="icon" />
        </span>
      </div>

      <div>
        <p className="font-lato text-3xl font-bold text-[#000230] xl:text-[2.5rem] xl:leading-[3.125rem]">
          {figure}
        </p>
        <p className="text-openSans text-lg capitalize text-[#6E6d7f] lg:text-2xl">
          {title}
        </p>
      </div>
    </div>
  )
}

export default Achievement
