import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Container: FC<Props> = (props) => {
  const { children, className = '' } = props
  return (
    <div
      className={`${className} grid w-full place-items-center px-[5%] lg:px-[2%] xl:px-[6%]`}
    >
      <div className="relative  w-full max-w-[120rem] origin-center xl:scale-90">
        {children}
      </div>
    </div>
  )
}

export default Container
