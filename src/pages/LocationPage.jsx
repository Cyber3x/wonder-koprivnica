import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useHistory } from 'react-router-dom'
import { useLocationsStore } from '../stores/locationsStore'

const capitalize = (word) => {
  const [first, ...rest] = word.split('')
  return [first.toUpperCase(), ...rest].join('')
}

const LocationPage = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const history = useHistory()
  const location = useLocationsStore((state) => state.locations[id])
  const { mainImg, title, text, desc, tags, moreImages, coords } = location

  document.body.style.background = '#fff'

  return (
    <div className='bg-white h-screen p-4 '>
      <h1 className='text-4xl font-medium text-gray-600 items-center flex w-full mb-4'>
        {title}
      </h1>
      <h1
        className='text-md bg-green-500 text-white py-1 px-2 rounded-md mb-3 w-max'
        onClick={() => history.push('/', { panTo: coords })}
      >
        {t('pages.location.show_on_map')}
      </h1>

      <img src={mainImg} />
      <p className='mt-8 text-gray-400 text-sm'>{desc}</p>
      <p className='mt-2 text-gray-800 text-sm'>{text}</p>
      <h1 className='mt-8 text-md font-medium text-gray-800'>
        {t('pages.location.more_images')}
      </h1>
      <div className='flex overflow-x-scroll mt-2'>
        {moreImages.map((image, i) => (
          <img src={image} className='mr-2' key={i} />
        ))}
      </div>
      <h1 className='mt-4 text-md font-medium text-gray-800'>
        {t('pages.location.location_tags')}
      </h1>
      <div className='flex mt-2 mb-4'>
        {tags.map((tag, i) => (
          <div className='bg-green-100 p-1 px-4 rounded-lg w-min mr-2' key={i}>
            {t(`tags.${tag}`)}
          </div>
        ))}
      </div>
      <div className='h-12 w-full' />
    </div>
  )
}

export default LocationPage
