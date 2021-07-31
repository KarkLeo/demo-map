import React from 'react'
import { Layer, Source } from 'react-map-gl'
import { useSelector } from 'react-redux'
import { getUserPathSourceSelector } from 'store/user-path'

const UserPath: React.FC = () => {
  const path = useSelector(getUserPathSourceSelector)
  return (
    <Source id='my-data' type='geojson' data={path}>
      <Layer
        id='user-path-layer'
        type='line'
        layout={{
          'line-join': 'round',
          'line-cap': 'round',
        }}
        paint={{
          'line-color': '#bc477b',
          'line-width': 6,
        }}
      />
    </Source>
  )
}

export default UserPath
