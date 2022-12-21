import React from 'react'

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
        {info.name}
      </h2>
      <ul className='location-info__list'>
        <li><span>Type: {info.type}</span></li>
        <li><span>Dimension: {info.dimension}</span></li>
        <li><span>Population: {info.population}</span></li>
      </ul>
      
    </div>
  )
}

export default LocationInfo