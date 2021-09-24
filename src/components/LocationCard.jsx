import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguageStore } from '../stores/languageStore'

const LocationCard = ({ className, location, style }) => {
  const { title, mainImg, id, text } = location
  const t = useLanguageStore((state) => state.t)

  return (
    <Link to={`/location/${id}`}>
      <div
        style={style}
        className={
          'bg-white rounded-lg py-2 px-3 shadow-md mb-4' + ' ' + className
        }
      >
        <h1 className='font-medium mb-1 text-xl'>
          {title.split('.').length == 3 ? t(title) : title}
        </h1>
        <p className='text-gray-400 text-sm line-clamp-3'>{t(text)}</p>
        <div className=' aspect-w-3 aspect-h-2 mt-3 mb-2 rounded-lg overflow-hidden'>
          <img src={mainImg} className='object-cover' />
        </div>
      </div>
    </Link>
  )
}

export default LocationCard
