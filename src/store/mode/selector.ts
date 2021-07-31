import { AppState } from '../types'
import { ModeType } from './types'

export const getModeSelector = (state: AppState): ModeType => state.mode.mode
