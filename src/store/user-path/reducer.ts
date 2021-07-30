import { Action, initialState, UserPathState } from './'

export const PUSH_POSITION = 'USER_PATH/PUSH__POSITION' as const

export const userPathReducer = (
  state: UserPathState = initialState,
  action: Action
): UserPathState => {
  switch (action.type) {
    case PUSH_POSITION:
      return { ...state, path: [...state.path, action.position] }
    default:
      return state
  }
}
