import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react'

type SliderContextType = {
  itemWidth: number
  translateValue: number
}
const SliderContext = createContext<SliderContextType>({} as SliderContextType)

const SliderProvider: FC<PropsWithChildren<{ value: SliderContextType }>> = (
  props
) => {
  const {
    children,
    value: { itemWidth, translateValue },
  } = props

  const memoValue = useMemo(
    () => ({
      itemWidth,
      translateValue,
    }),
    [itemWidth, translateValue]
  )

  return (
    <SliderContext.Provider value={memoValue}>
      {children}
    </SliderContext.Provider>
  )
}

const useSliderContext = () => {
  const sliderContext = useContext(SliderContext)

  if (sliderContext === undefined) {
    throw new Error(
      'Slider context must be used within a Slider Context Provider'
    )
  }

  return sliderContext
}

export { useSliderContext, SliderProvider }
