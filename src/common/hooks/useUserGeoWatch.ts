import { useEffect, useState } from 'react'
import { getCurrentPosition } from 'services/navigator'
import { useDispatch } from 'react-redux'
import { pushPositionAction } from 'store/user-path'

const useUserGeoWatch = (
  callback?: (position: GeolocationPosition) => void
) => {
  const dispatch = useDispatch()
  const [pos, setPos] = useState<GeolocationPosition | null>(null)
  useEffect(() => {
    const getPosition = async () => {
      await getCurrentPosition(
        callback
          ? (pos) => {
              setPos(pos)
              pos && callback(pos)
            }
          : setPos
      )
    }
    getPosition()
  }, [setPos])

  useEffect(() => {
    if (pos) dispatch(pushPositionAction(pos))
  }, [pos, dispatch])
}

export default useUserGeoWatch
