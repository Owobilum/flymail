import { FC, PropsWithChildren, forwardRef, Ref } from 'react'

import { classNames } from '@/utils/classNames'

type ButtonProps = {
  variant?: 'outlined' | 'contained'
  colorScheme?: 'primary' | 'white'
  size?: 'sm' | 'md' | 'lg'
} & React.ComponentPropsWithoutRef<'button'>

const VARIANT_MAPS = {
  outlined: 'before:bg-primary before:w-0 hover:before:w-[100%]',
  contained: 'before:bg-primary before:w-[100%] hover:before:w-0',
}

const COLOR_SCHEME_MAP = {
  primary: 'text-white border-primary hover:text-white',
  white: 'text-white border-white hover:border-primary',
}

const SIZE_MAP = {
  sm: 'h-11 w-[8.5625rem] lg:h-14 lg:w-[8.9625rem]',
  md: 'h-11 w-[9.45rem] lg:h-16 lg:w-[10.4437rem]',
  lg: 'h-11 w-[9.7744rem] lg:h-16 lg:w-[10.8087rem]',
}

const Button: FC<PropsWithChildren<ButtonProps>> = forwardRef(function _Button(
  props,
  ref: Ref<HTMLButtonElement>
) {
  const {
    children,
    variant = 'contained',
    colorScheme = 'primary',
    size = 'md',
    className,
    ...restProps
  } = props
  return (
    <button
      {...restProps}
      ref={ref}
      className={classNames(
        className,
        VARIANT_MAPS[variant],
        COLOR_SCHEME_MAP[colorScheme],
        SIZE_MAP[size],
        'btn'
      )}
    >
      {children}
    </button>
  )
})

export default Button
