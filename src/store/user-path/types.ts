import * as actions from './actions'

export interface UserPathState {
  path: GeolocationPosition[]
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
