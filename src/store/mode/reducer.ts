import { Action, initialState, ModeState } from './'

export const TURN_ON_NAVIGATE = 'MODE/TURN_ON_NAVIGATE' as const
export const TURN_ON_EDIT = 'MODE/TURN_ON_EDIT' as const
export const TURN_ON_FREE = 'MODE/TURN_ON_FREE' as const

export const modeReducer = (
  state: ModeState = initialState,
  action: Action
): ModeState => {
  switch (action.type) {
    case TURN_ON_NAVIGATE:
      return { ...state, mode: 'NAVIGATE' }
    case TURN_ON_EDIT:
      return { ...state, mode: 'EDIT' }
    case TURN_ON_FREE:
      return { ...state, mode: 'FREE' }
    default:
      return state
  }
}
