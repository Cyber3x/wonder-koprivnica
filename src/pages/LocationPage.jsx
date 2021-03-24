import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useLocationsStore } from '../stores/locationsStore'
import { useLanguageStore } from '../stores/languageStore'
import NavButtons from '../components/NavButtons'

const Header = ({ children }) => {
  return (
    <h1 className='mt-8 mb-3 text-lg font-medium text-gray-800'>{children}</h1>
  )
}
const LocationPage = () => {
  const { id } = useParams()
  const t = useLanguageStore((state) => state.t)
  const history = useHistory()
  const location = useLocationsStore((state) => state.locations[id])
  const { mainImg, title, text, tags, moreImages, coords, links } = location

  document.body.style.background = '#fff'

  return (
    <div style={{ height: window.innerHeight }}>
      <div className='bg-white p-4 '>
        {/* TITEL */}
        <h1 className='text-4xl font-medium text-gray-600 items-center flex w-full mb-4'>
          {title.split('.').length == 3 ? t(title) : title}
        </h1>

        {/* GO TO MAP BUTTON */}
        <h1
          className='text-md bg-green-500 text-white py-1 px-2 rounded-md mb-6 w-max'
          onClick={() => history.push('/', { panTo: coords })}
        >
          {t('pages.location.show_on_map')}
        </h1>

        {/* MAIN IMAGE */}
        <img src={mainImg} />

        {/* DESCRIPTION */}
        <Header>{t('pages.location.description')}</Header>
        <p className='text-gray-800 text-sm'>{t(text)}</p>

        {/* PHOTOS */}
        {moreImages && moreImages.length > 0 && (
          <>
            <Header>{t('pages.location.more_images')}</Header>
            <div className='flex overflow-x-scroll mt-2 h-72'>
              {moreImages.map((image, i) => (
                <img src={image} className='mr-2 object-cover' key={i} />
              ))}
            </div>
          </>
        )}

        {/* PAGES */}
        {links && links.length != 0 && (
          <Header>{t('pages.location.official_pages')}</Header>
        )}
        <ul className='space-y-2'>
          {links &&
            links.map(({ lable, link }, i) => (
              <li key={i}>
                <a className='text-green-600' href={link} target='_blank'>
                  {lable.split('.').length === 3 ? t(lable) : lable}
                </a>
              </li>
            ))}
        </ul>
        {/* TAGS */}
        <Header>{t('pages.location.location_tags')}</Header>
        <div className='flex mt-2 mb-2'>
          {tags.map((tag, i) => (
            <div
              className='bg-green-100 p-1 px-4 rounded-lg w-min mr-2'
              key={i}
            >
              {t(`tags.${tag}`)}
            </div>
          ))}
        </div>
        <div className='h-12 w-full' />
      </div>
      <NavButtons fixed />
    </div>
  )
}

export default LocationPage
