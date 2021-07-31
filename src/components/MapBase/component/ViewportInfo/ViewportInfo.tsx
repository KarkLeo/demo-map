import Rect from 'react'

import './ViewportInfo.css'

interface ViewportInfoProps {
  viewport: {
    longitude: number
    latitude: number
    zoom: number
  }
}

const ViewportInfo: Rect.FC<ViewportInfoProps> = ({
  viewport: { longitude, latitude, zoom },
}) => {
  return (
    <div className='viewport-info'>
      <span className='viewport-info__item'>
        longitude: {longitude.toFixed(4)}
      </span>
      <span className='viewport-info__item'>
        latitude: {latitude.toFixed(4)}
      </span>
      <span className='viewport-info__item'>zoom: {zoom.toFixed(4)}</span>
    </div>
  )
}

export default ViewportInfo
