import { Variants } from 'framer-motion'

export const dodgeBottomRight: Variants = {
  animate: {
    x: 25,
    y: 10,
  },
}

export const dodgeRight: Variants = {
  animate: {
    x: 25,
    y: -5,
  },
}

export const dodgeTopRight: Variants = {
  animate: {
    x: 25,
    y: -10,
  },
}

export const dodgeLeft: Variants = {
  animate: {
    x: -25,
    y: -5,
  },
}

export const dodgeTopLeft: Variants = {
  animate: {
    x: -25,
    y: -10,
  },
}

export const dodgeBottom: Variants = {
  animate: {
    y: 10,
  },
}

export const fromTopAnimation: Variants = {
  initial: {
    transform: 'translateY(-100%)',
    opacity: 0,
  },
  final: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
}

export const fromBottomAnimation: Variants = {
  initial: {
    transform: 'translateY(100%)',
    opacity: 0,
  },
  final: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
}

export const fromLeftAnimation: Variants = {
  initial: {
    transform: 'translateX(-100%)',
    opacity: 0,
  },
  final: {
    transform: 'translateX(0%)',
    opacity: 1,
  },
}

export const fromRightAnimation: Variants = {
  initial: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  final: {
    opacity: 1,
    transform: 'translateX(0%)',
  },
}

export const opacityAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
  },
}
