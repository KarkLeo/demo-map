import React from 'react'
import { useSelector } from 'react-redux'
import { getAreasSelector } from '../../store/areas'
import { Layer, Source } from 'react-map-gl'
import useContainsAreas from './useContainsAreas'

const MapAreas: React.FC = () => {
  const areas = useSelector(getAreasSelector)
  const containsAreas = useContainsAreas()

  return (
    <>
      {areas.map((i, index) => (
        <Source key={index} id={'feature' + index} type='geojson' data={i}>
          <Layer
            id={'feature' + index + '_layer'}
            type='fill'
            paint={{
              'fill-color': containsAreas[index] ? '#ff867c' : '#cfff95',
              'fill-opacity': 0.6,
            }}
          />
          <Layer
            id={'feature' + index + '_layer_outline'}
            type='line'
            paint={{
              'line-color': containsAreas[index] ? '#b61827' : '#6b9b37',
              'line-width': 3,
            }}
          />
        </Source>
      ))}
    </>
  )
}

export default MapAreas
