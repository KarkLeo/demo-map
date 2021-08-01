import { useEffect } from 'react'
import { stopWatchPosition, watchPosition } from 'services/navigator'
import { useDispatch } from 'react-redux'
import { pushPositionAction } from 'store/user-path'

const useUserGeoWatch = (
  callback?: (position: GeolocationPosition) => void
) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const startWatchPosition = () =>
      watchPosition((pos) => {
        if (pos) {
          dispatch(pushPositionAction(pos))
          callback && callback(pos)
        }
      })
    const watchID = startWatchPosition()
    return () => {
      stopWatchPosition(watchID)
    }
  }, [dispatch, callback])
}

export default useUserGeoWatch
