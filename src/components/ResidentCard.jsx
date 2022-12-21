import React from 'react'

import { useGetResident } from '../hooks/useGetResident'

const ResidentCard = ({ url }) => {


  const resident = useGetResident(url)


  
  return (
    <article className='card'>
      <header className='card__header'>
      <img src={resident.image} alt="" />
        <div className='card__circle-container'>
          <span className='card__circle'></span>
          <span className='card__circle-value'>{resident.status}</span>
        </div>
      </header>

      <section className='card__body'>
        <h3 className='card__name'>{resident.name}</h3>
        <ul className='card__list'>
          <li className='card__list__item'>
            <span className='card__list__item-label'>Specie</span>
            <span className='card__list__item-value'>{resident?.species}</span>
          </li>
          <li className='card__list__item'>
            <span className='card__list__item-label'>Origin</span>
            <span className='card__list__item-value'>{resident?.origin?.name}</span>
          </li>
          <li className='card__list__item'>
            <span className='card__list__item-label'>Episodes where appear</span>
            <span className='card__list__item-value'>{resident?.episode?.length}</span>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard