import { FC } from 'react'

interface Props {
  width?: string
  height?: string
  color?: string
}

const CheckIcon: FC<Props> = ({
  width = '24',
  height = '22',
  color = '#FC7557',
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
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export { CheckIcon }
