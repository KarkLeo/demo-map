import { useEffect } from 'react'
import { getCurrentPosition } from 'services/navigator'
import { useDispatch } from 'react-redux'
import { pushPositionAction } from 'store/user-path'

const useUserGeoWatch = (
  callback?: (position: GeolocationPosition) => void
) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getPosition = async () => {
      await getCurrentPosition((pos) => {
        if (pos) {
          dispatch(pushPositionAction(pos))
          callback && callback(pos)
        }
      })
    }
    getPosition()
  }, [dispatch, callback])
}

export default useUserGeoWatch
