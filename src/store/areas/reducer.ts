import { Action, initialState, AreasState } from './'

export const SET_AREAS = 'AREAS/SET_AREAS' as const

export const areasReducer = (
  state: AreasState = initialState,
  action: Action
): AreasState => {
  switch (action.type) {
    case SET_AREAS:
      return { ...state, areas: action.areas }
    default:
      return state
  }
}
