import { ReactNode, FC } from 'react'

const IconItem: FC<{ children: ReactNode; icon: ReactNode }> = (props) => {
  const { children, icon } = props
  return (
    <div className="flex items-center gap-2 font-lato text-[#5E5D5E] lg:text-lg">
      {icon}
      <p>{children}</p>
    </div>
  )
}

export default IconItem
