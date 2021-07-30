import { PUSH_POSITION } from './reducer'

export const pushPositionAction = (position: GeolocationPosition) => ({
  type: PUSH_POSITION,
  position,
})
