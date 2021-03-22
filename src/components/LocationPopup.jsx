import React from 'react'
import { Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { useLanguageStore } from '../stores/languageStore'

const LocationPopup = ({ info }) => {
  const t = useLanguageStore((state) => state.t)
  const { title, mainImg, id } = info
  return (
    <Popup autoPan={false}>
      <h1 className='text-lg mb-2'>{title}</h1>
      <img src={mainImg} className='w-56 -mb-1 rounded-md' />
      <p className='w-56'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odit.
      </p>
      <Link to={`/location/${id}`}>
        <button className='bg-green-500 text-white py-2 w-full rounded-lg -mt-4 mb-1'>
          {t('popup.read_more')}
        </button>
      </Link>
    </Popup>
  )
}

export default LocationPopup
