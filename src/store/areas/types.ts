import * as actions from './actions'
import * as GeoJSON from 'geojson'

export type AreaType = GeoJSON.Feature<GeoJSON.Geometry>

export interface AreasState {
  areas: AreaType[]
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
