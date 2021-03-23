import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguageStore } from '../stores/languageStore'

const LocationCard = ({ className, location }) => {
  const { title, mainImg, id, text } = location
  const t = useLanguageStore((state) => state.t)

  return (
    <Link to={`/location/${id}`}>
      <div
        className={
          'bg-white rounded-lg py-2 px-3 shadow-md mb-4' + ' ' + className
        }
      >
        <h1 className='font-medium mb-1 text-xl'>{title}</h1>
        <p className='text-gray-400 text-sm line-clamp-3'>{t(text)}</p>
        <img src={mainImg} className='mt-3 mb-2 rounded-lg' />
      </div>
    </Link>
  )
}

export default LocationCard
