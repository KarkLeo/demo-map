export const getCurrentPosition = async (
  setPosState: (pos: null | GeolocationPosition) => void
): Promise<void> => {
  const readPosition = (position: GeolocationPosition) => {
    setPosState(position)
  }
  await navigator.geolocation.watchPosition(readPosition, (e) => console.log(e))
}
