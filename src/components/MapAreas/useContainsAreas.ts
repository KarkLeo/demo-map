import { useSelector } from 'react-redux'
import { getAreasSelector } from '../../store/areas'
import { getUserPositionSelector } from '../../store/user-path'
import { FeatureOf, Polygon } from '@nebula.gl/edit-modes/src/geojson-types'
import * as turf from '@turf/turf'

const useContainsAreas = () => {
  const areas = useSelector(getAreasSelector)
  const position = useSelector(getUserPositionSelector)

  return position
    ? areas.map((i) => {
        const poly: FeatureOf<Polygon> = i as FeatureOf<Polygon>
        const polygon = turf.polygon(poly.geometry.coordinates)

        const point = turf.point([
          position.coords.longitude,
          position.coords.latitude,
        ])

        return turf.booleanContains(polygon, point)
      })
    : []
}

export default useContainsAreas
