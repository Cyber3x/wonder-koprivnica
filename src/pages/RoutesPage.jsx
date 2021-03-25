import React from 'react'

import NavButtons from '../components/NavButtons'
import { useLanguageStore } from '../stores/languageStore'
import { useMapStore } from '../stores/mapStore'
import { useLocationsStore } from '../stores/locationsStore'
import LocationCard from '../components/LocationCard'

const RouteCard = ({
  route,
  translation,
  onClick,
  average_lenght,
  location_IDS,
}) => {
  const t = useLanguageStore((state) => state.t)
  const routes = useMapStore((state) => state.routes)
  let locations = useLocationsStore((state) =>
    state.locations.filter((location) => location_IDS.includes(location.id))
  )

  const [showLocations, setShowLocations] = React.useState(false)

  return (
    <div className='bg-white pt-3 pb-1 px-4 rounded-md mb-4'>
      <div
        className='flex justify-between items-center mb-4 border-gray-300 border-b pb-3'
        onClick={onClick}
      >
        <h1 className='text-2xl'>{t(translation)}</h1>
        <div
          className={
            'border-green-500 border-2 w-6 h-6 rounded-full m-2 ' +
            (routes[route] ? 'bg-green-500' : 'bg-gray-100')
          }
        />
      </div>
      <p className='text-md mb-4'>
        {t('pages.routes.average_length')}: {average_lenght} h
      </p>

      <div
        className='text-md bg-green-500 text-white py-2 px-2 rounded-md mb-4 w-full text-center'
        onClick={() => setShowLocations(!showLocations)}
      >
        {showLocations
          ? t('pages.routes.hide_locations')
          : t('pages.routes.show_locations')}
      </div>

      {showLocations &&
        locations.map((location) => (
          <LocationCard
            location={location}
            key={location.id}
            style={{ boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.15)' }}
          />
        ))}
    </div>
  )
}

const RoutesPage = () => {
  document.body.style.backgroundColor = '#e5e7eb'
  const t = useLanguageStore((state) => state.t)
  const routes = useMapStore((state) => state.routes)
  const setRouteActivity = useMapStore((state) => state.setRouteActivity)

  console.log(routes)
  const handleRouteToggle = (route) => {
    setRouteActivity(route, !routes[route])
  }

  return (
    <div>
      <div className='p-4'>
        <h1 className='text-4xl font-medium text-gray-600 items-center flex w-full mb-6'>
          {t('nav.routes')}
        </h1>
        <RouteCard
          route='north'
          translation='pages.routes.north_route'
          onClick={() => handleRouteToggle('north')}
          average_lenght={2.5}
          location_IDS={[4, 2, 1, 2, 6, 8]}
        />
        <RouteCard
          route='south'
          translation='pages.routes.south_route'
          onClick={() => handleRouteToggle('south')}
          average_lenght={2}
          location_IDS={[12, 10, 13, 11]}
        />

        <div className='h-12 w-full' />
      </div>
      <NavButtons fixed />
    </div>
  )
}

export default RoutesPage
