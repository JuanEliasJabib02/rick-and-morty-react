import React from 'react'

import { useGetResident } from '../hooks/useGetResident'

const ResidentCard = ({ url }) => {


  const resident = useGetResident(url)


  
  return (
    <article className='resident-card'>
      <header>
        <div className='resident-card__status'>
          <span className='resident-card__circle'></span>
          <span className='resident-card__status-info'>{resident.status}</span>

        </div>
        <img src={resident.image} alt="" />
      </header>

      <section>
        <h3>{resident.name}</h3>
        <ul>
          <li><span>Specie</span><span> {resident?.species}</span></li>
          <li><span>Origin</span><span></span>  {resident?.origin?.name}</li>
          <li><span>Episodes where appear</span><span></span> {resident?.episode?.length }</li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard