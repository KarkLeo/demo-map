import React, { useCallback, useState } from 'react'
import MapGL, { NavigationControl } from 'react-map-gl'
import MapEditor from '../MapEditor/MapEditor'
import UserPath from '../UserPath/UserPath'
import useUserGeoWatch from 'common/hooks/useUserGeoWatch'
import { TOKEN, STYLE } from './config'
import ViewportInfo from './component/ViewportInfo/ViewportInfo' // Need to GitHub pages work

// const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN
// const STYLE = process.env.REACT_APP_MAPBOX_STYLE

const MapBase: React.FC = () => {
  const [viewport, setViewport] = useState({
    longitude: -91.874,
    latitude: 42.76,
    zoom: 12,
  })

  const watchPosition = useCallback(
    (pos: GeolocationPosition) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      })
    },
    [viewport, setViewport]
  )

  useUserGeoWatch(watchPosition)

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <MapGL
        {...viewport}
        onClick={(e) => console.log(e)}
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
    </div>
  )
}

export default MapBase
