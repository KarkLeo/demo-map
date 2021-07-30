import { useEffect, useState } from 'react'
import { getCurrentPosition } from 'services/navigator'
import { useDispatch } from 'react-redux'
import { pushPositionAction } from 'store/user-path'

const useUserGeoWatch = () => {
  const dispatch = useDispatch()
  const [pos, setPos] = useState<GeolocationPosition | null>(null)
  useEffect(() => {
    const getPosition = async () => {
      await getCurrentPosition(setPos)
    }
    getPosition()
  }, [setPos])

  useEffect(() => {
    console.log(pos)
    if (pos) dispatch(pushPositionAction(pos))
  }, [pos, dispatch])
}

export default useUserGeoWatch
