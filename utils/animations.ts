import { Variants } from 'framer-motion'

const dodgeBottomRight: Variants = {
  animate: {
    x: 25,
    y: 10,
  },
}

const dodgeRight: Variants = {
  animate: {
    x: 25,
    y: -5,
  },
}

const dodgeTopRight: Variants = {
  animate: {
    x: 25,
    y: -10,
  },
}

const dodgeLeft: Variants = {
  animate: {
    x: -25,
    y: -5,
  },
}

const dodgeTopLeft: Variants = {
  animate: {
    x: -25,
    y: -10,
  },
}

const dodgeBottom: Variants = {
  animate: {
    y: 10,
  },
}

export {
  dodgeTopRight,
  dodgeRight,
  dodgeBottomRight,
  dodgeTopLeft,
  dodgeBottom,
  dodgeLeft,
}
