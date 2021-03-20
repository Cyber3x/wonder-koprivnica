import React from 'react'
import { Link } from 'react-router-dom'

const LocationCard = ({ className, location }) => {
  const { title, desc, mainImg, id } = location
  return (
    <Link to={`/location/${id}`}>
      <div
        className={
          'bg-white rounded-lg py-2 px-3 shadow-md mb-4' + ' ' + className
        }
      >
        <h1 className='font-medium mb-1 text-xl'>{title}</h1>
        <p className='text-gray-400 text-sm'>{desc}</p>
        <img src={mainImg} className='mt-3 mb-2 rounded-lg' />
      </div>
    </Link>
  )
}

export default LocationCard
