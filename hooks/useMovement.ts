import { useState } from 'react'

const useMovement = () => {
  const [movement, setMovement] = useState(1)

  const handleCurrentMovement = () => setMovement(Math.floor(Math.random() * 3))
  return { movement, handleCurrentMovement }
}

export default useMovement
