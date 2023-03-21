import { FC } from 'react'

import { IconType } from '@/types'

const CheckIcon: FC<IconType> = ({
  width = '24',
  height = '22',
  fill = '#FC7557',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.00195 7.00049L7.00195 12.0005L15.3353 2.00049"
      stroke={fill}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export { CheckIcon }
