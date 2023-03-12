import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Container: FC<Props> = (props) => {
  const { children, className = '' } = props
  return (
    <div
      className={`${className} grid place-items-center w-full px-[5%] lg:px-[2%] xl:px-[6%]`}
    >
      <div className="max-w-[120rem]  w-full xl:scale-90 origin-center">
        {children}
      </div>
    </div>
  )
}

export default Container
