import { SET_AREAS } from './reducer'
import { AreaType } from './types'

export const setAreasAction = (areas: AreaType[]) => ({
  type: SET_AREAS,
  areas,
})
