import React from 'react'
import { Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { useLanguageStore } from '../stores/languageStore'

const LocationPopup = ({ info }) => {
  const t = useLanguageStore((state) => state.t)
  const { title, mainImg, id, text } = info
  return (
    <Popup autoPan={false}>
      <h1 className='text-lg mb-2 w-56'>{title}</h1>
      <img src={mainImg} className='w-56 rounded-md' />
      {text && (
        <h1 className='w-56 mt-3 mb-4 line-clamp-3 text-gray-500 text-md'>
          {t(text)}
        </h1>
      )}
      <Link to={`/location/${id}`}>
        <button className='bg-green-500 text-white text-lg py-1 w-full rounded-lg mb-1'>
          {t('popup.read_more')}
        </button>
      </Link>
    </Popup>
  )
}

export default LocationPopup
