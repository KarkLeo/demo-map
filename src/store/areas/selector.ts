import { AppState } from '../types'
import { AreaType } from './types'

export const getAreasSelector = (state: AppState): AreaType[] =>
  state.areas.areas
