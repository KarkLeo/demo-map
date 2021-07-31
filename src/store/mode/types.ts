import * as actions from './actions'

export type ModeType = 'NAVIGATE' | 'EDIT' | 'FREE'

export interface ModeState {
  mode: ModeType
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
