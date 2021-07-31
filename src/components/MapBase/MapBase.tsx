import React, { useEffect, useState } from 'react'
import MapGL, { NavigationControl } from 'react-map-gl'
import MapEditor from '../MapEditor/MapEditor'
import UserPath from '../UserPath/UserPath'
import useUserGeoWatch from 'common/hooks/useUserGeoWatch'
import { STYLE, TOKEN } from './config' // Need to GitHub pages work
import ViewportInfo from './component/ViewportInfo/ViewportInfo'
import ModeButtons from 'components/ModeButtons/ModeButtons'
import { useSelector } from 'react-redux'
import { getModeSelector } from 'store/mode'
import { getUserPositionSelector } from 'store/user-path'

// const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN
// const STYLE = process.env.REACT_APP_MAPBOX_STYLE

const MapBase: React.FC = () => {
  const [viewport, setViewport] = useState({
    longitude: -91.874,
    latitude: 42.76,
    zoom: 12,
  })

  const mode = useSelector(getModeSelector)
  const position = useSelector(getUserPositionSelector)

  useEffect(() => {
    switch (mode) {
      case 'FREE':
        return undefined
      case 'NAVIGATE': {
        position &&
          setViewport({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            zoom: 16,
          })
        return undefined
      }
    }
  }, [mode, position, setViewport])

  useUserGeoWatch()

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <MapGL
        {...viewport}
        width='100%'
        height='100%'
        mapStyle={STYLE}
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <NavigationControl />
        <MapEditor />
        <UserPath />
      </MapGL>
      <ViewportInfo viewport={viewport} />
      <ModeButtons />
    </div>
  )
}

export default MapBase
