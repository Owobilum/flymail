import { FC } from 'react'
import { motion, Variants } from 'framer-motion'

const AnimatedArrow: FC<{ className?: string; strokeColor?: string }> = (
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
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeOut' },
    },
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82 96"
      width="82"
      height="96"
      preserveAspectRatio="xMidYMid meet"
      variants={svgVariants}
      initial="initial"
      animate="animate"
      className={className}
    >
      <defs>
        <clipPath id="__lottie_element_7">
          <rect width="82" height="96" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_7)">
        <g opacity="1">
          <g opacity="1">
            <g opacity="1">
              <motion.path
                variants={pathVariants}
                fill={strokeColor}
                fillOpacity="0.49251224508153224"
                d=" M69.80000305175781,92.72000122070312 C71.87999725341797,88.83000183105469 73.7699966430664,84.83999633789062 75.81999969482422,80.94000244140625 C76.23999786376953,80.13999938964844 78.18000030517578,77.93000030517578 78.08999633789062,77.16999816894531 C77.95999908447266,76.12000274658203 74.77999877929688,75.69000244140625 74.04000091552734,75.56999969482422 C70.26000213623047,74.94999694824219 66.4800033569336,74.69000244140625 62.66999816894531,74.41999816894531 C62.22999954223633,74.37999725341797 59.54999923706055,73.93000030517578 59.31999969482422,74.26000213623047 C58.43000030517578,75.5 60.2599983215332,78.05000305175781 60.72999954223633,79.05000305175781 C62.79999923706055,83.41000366210938 65.51000213623047,89.45999908447266 68.6500015258789,93.19000244140625"
              ></motion.path>
              <motion.path
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                stroke={strokeColor}
                strokeOpacity="1"
                strokeWidth="5"
                d=" M69.80000305175781,92.72000122070312 C71.87999725341797,88.83000183105469 73.7699966430664,84.83999633789062 75.81999969482422,80.94000244140625 C76.23999786376953,80.13999938964844 78.18000030517578,77.93000030517578 78.08999633789062,77.16999816894531 C77.95999908447266,76.12000274658203 74.77999877929688,75.69000244140625 74.04000091552734,75.56999969482422 C70.26000213623047,74.94999694824219 66.4800033569336,74.69000244140625 62.66999816894531,74.41999816894531 C62.22999954223633,74.37999725341797 59.54999923706055,73.93000030517578 59.31999969482422,74.26000213623047 C58.43000030517578,75.5 60.2599983215332,78.05000305175781 60.72999954223633,79.05000305175781 C62.79999923706055,83.41000366210938 65.51000213623047,89.45999908447266 68.6500015258789,93.19000244140625"
              ></motion.path>
            </g>
            <g opacity="1">
              <motion.path
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                stroke={strokeColor}
                strokeOpacity="1"
                strokeWidth="3"
                d=" M69.36000061035156,76.91000366210938 C72.75,63.470001220703125 72.12999725341797,43.34000015258789 63.650001525878906,31.579999923706055 C59.79999923706055,26.25 45.5,17.209999084472656 40.43000030517578,26.149999618530273 C34.869998931884766,35.95000076293945 52.630001068115234,39.4900016784668 55.33000183105469,29.549999237060547 C57.720001220703125,20.760000228881836 51.63999938964844,12.970000267028809 44.52000045776367,8.5600004196167 C31.93000030517578,0.7599999904632568 18.170000076293945,-0.07000000029802322 4.5,5.340000152587891"
              ></motion.path>
            </g>
          </g>
        </g>
      </g>
    </motion.svg>
  )
}

export default AnimatedArrow
