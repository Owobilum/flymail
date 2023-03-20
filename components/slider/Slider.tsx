import { ReactNode, ReactElement, useState, PropsWithChildren, FC } from 'react'

import { SliderProvider, useSliderContext } from './slider-context'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const FLEX_GAP = 16
const ROOT_EL = 16

const Item: FC<PropsWithChildren> = ({ children }) => {
  const { itemWidth, translateValue } = useSliderContext()

  return (
    <div
      className=" transition-transform duration-500"
      style={{
        minWidth: `${itemWidth / ROOT_EL}rem`,
        transform: `translateX(-${translateValue / ROOT_EL}rem)`,
      }}
    >
      {children}
    </div>
  )
}

type ItemWidthType = { xs?: number; sm?: number; lg?: number }

function Slider({
  children,
  items,
  customWidth,
}: {
  children: ReactNode
  items: any[]
  customWidth?: ItemWidthType
}): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { width } = useWindowDimensions()

  const itemWidth =
    !width || width > 600
      ? customWidth?.lg || 490
      : width > 370
      ? customWidth?.sm || 340
      : customWidth?.xs || 240
  const translateValue = itemWidth * currentIndex + currentIndex * FLEX_GAP

  const setIndex = (index: number) => setCurrentIndex(index)

  return (
    <SliderProvider value={{ itemWidth, translateValue }}>
      <div className="overflow-x-hidden py-24">
        <div className="flex" style={{ gap: `${FLEX_GAP / ROOT_EL}rem` }}>
          {children}
        </div>
        <div className="mt-4 flex items-center justify-center gap-1">
          {items.map((item, i) => (
            <button
              aria-label={`view item ${i + 1}`}
              key={i}
              onClick={() => setIndex(i)}
              className={`mx-1 h-2 w-2 rounded-full lg:h-3 lg:w-3 ${
                currentIndex === i ? 'bg-primary' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </SliderProvider>
  )
}

Slider.Item = Item

export default Slider
