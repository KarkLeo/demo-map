import { AppState } from '../types'
import { createSelector } from 'reselect'
import * as GeoJSON from 'geojson'

export const getUserPathSelector = (state: AppState): GeolocationPosition[] =>
  state.userPath.path

export const getUserPositionSelector = (
  state: AppState
): GeolocationPosition | null => state.userPath.position

export const getUserPathSourceSelector = createSelector(
  getUserPathSelector,
  (geoPath): GeoJSON.Feature<GeoJSON.Geometry> => ({
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: geoPath.map((i) => [i.coords.longitude, i.coords.latitude]),
    },
  })
)
