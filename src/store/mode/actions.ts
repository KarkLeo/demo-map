import { TURN_ON_EDIT, TURN_ON_FREE, TURN_ON_NAVIGATE } from './reducer'

export const turnOnEditAction = () => ({
  type: TURN_ON_EDIT,
})

export const turnOnNavigateAction = () => ({
  type: TURN_ON_NAVIGATE,
})

export const turnOnFreeAction = () => ({
  type: TURN_ON_FREE,
})
