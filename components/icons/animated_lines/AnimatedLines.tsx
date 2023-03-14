import { FC } from 'react'
import { motion, Variants } from 'framer-motion'

const AnimatedLines: FC<{ className?: string; strokeColor?: string }> = (
  props
) => {
  const { className, strokeColor = '#FF6854' } = props

  const svgVariants: Variants = {
    initial: {},
    animate: {},
  }
  const pathVariants: Variants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: { duration: 1, repeat: Infinity, ease: 'easeOut' },
    },
  }

  return (
    <motion.svg
      className={className}
      variants={svgVariants}
      initial="initial"
      animate="animate"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 44"
      width="48"
      height="44"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="__lottie_element_3">
          <rect width="48" height="44" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_3)">
        <g>
          <g>
            <g>
              <motion.path
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                stroke={strokeColor}
                strokeOpacity="1"
                strokeWidth="6"
                d=" M16.020000457763672,4.730000019073486 C11.62399959564209,11.487000465393066 7.9679999351501465,18.636999130249023 3.947999954223633,25.60099983215332"
              ></motion.path>
            </g>
            <g>
              <motion.path
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                stroke={strokeColor}
                strokeOpacity="1"
                strokeWidth="6"
                d=" M40.13999938964844,3.7300000190734863 C29.766000747680664,11.836999893188477 20.05299949645996,21.118999481201172 10.944999694824219,30.659000396728516"
              ></motion.path>
            </g>
            <g>
              <motion.path
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                stroke={strokeColor}
                strokeOpacity="1"
                strokeWidth="6"
                d=" M44.099998474121094,28.020000457763672 C35.24399948120117,29.55900001525879 23.7549991607666,35.22700119018555 14.803999900817871,39.25600051879883"
              ></motion.path>
            </g>
          </g>
        </g>
      </g>
    </motion.svg>
  )
}

export default AnimatedLines
