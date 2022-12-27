import React from 'react'
import "./styles/locationInfo.css"

const LocationInfo = ({ location }) => {

  const residents = location?.residents

  const population = residents?.length

  const info = {
    name: location?.name,
    dimension: location?.dimension,
    type: location?.type,
    population
    
  }
  
  return (
    <div className='location-info'>
      <h2 className='location-info__planet-name'>
        Location: <span>{info.name}</span>
      </h2>
      <ul className='location-info__list'>
        <li>Type: <span>{info.type}</span></li>
        <li>Dimension: <span>{info.dimension}</span></li>
        <li>Population: <span>{info.population}</span></li>
      </ul>
      
    </div>
  )
}

export default LocationInfo