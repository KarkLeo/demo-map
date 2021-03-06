import * as actions from './actions'

export interface UserPathState {
  path: GeolocationPosition[]
  position: GeolocationPosition | null
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
