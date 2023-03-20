import { useState, useEffect } from 'react'

interface Size {
  width: number | undefined
  height: number | undefined
}

function useWindowDimensions(): Size {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      console.log('RESIZED')
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export default useWindowDimensions
