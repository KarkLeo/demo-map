import React from 'react'
import { Marker } from 'react-map-gl'
import { useSelector } from 'react-redux'
import { getUserPositionSelector } from '../../store/user-path'
import './CurrentPoint.css'

const CurrentPoint: React.FC = () => {
  const position = useSelector(getUserPositionSelector)
  return (
    position && (
      <Marker
        longitude={position.coords.longitude}
        latitude={position.coords.latitude}
      >
        <div className='point' />
      </Marker>
    )
  )
}

export default CurrentPoint
