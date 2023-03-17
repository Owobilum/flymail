import { FC } from 'react'

const AltIntegrationCard: FC<{ title: string; body: string }> = ({
  title,
  body,
}) => {
  return (
    <div
      className="relative flex h-[16rem] w-[18rem] flex-col justify-between rounded-lg border-2 bg-[#313257] 
       p-4 font-bold text-white hover:border-primary lg:p-6"
      style={{ backgroundImage: "url('/images/zig-zag-dark.svg')" }}
    >
      <p className="text-2xl capitalize text-white lg:text-[1.875rem]">
        {title}
      </p>
      <p className="font-lato lg:text-lg"> {body}</p>
      <p className="text-sm underline lg:text-base">See More</p>
    </div>
  )
}

export default AltIntegrationCard
