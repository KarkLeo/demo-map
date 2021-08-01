export const watchPosition = (
  setPosState: (pos: null | GeolocationPosition) => void
) => {
  const readPosition = (position: GeolocationPosition) => {
    setPosState(position)
  }
  return navigator.geolocation.watchPosition(
    readPosition,
    (e) => console.log(e),
    {
      enableHighAccuracy: true,
      maximumAge: 5 * 1000,
    }
  )
}

export const stopWatchPosition = (watchID: number) =>
  navigator.geolocation.clearWatch(watchID)
