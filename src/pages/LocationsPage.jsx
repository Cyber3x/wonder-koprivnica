import React from 'react'
import LocationCard from '../components/LocationCard'
import NavButtons from '../components/NavButtons'

import { useLanguageStore } from '../stores/languageStore'
import { useLocationsStore } from '../stores/locationsStore'

const capitalize = (word) => {
  const [first, ...rest] = word.split('')
  return [first.toUpperCase(), ...rest].join('')
}

const FilterList = ({ className, setFilterTag, filterTag }) => {
  const t = useLanguageStore((state) => state.t)
  let tags = useLocationsStore((state) =>
    state.locations.reduce((sum, location) => sum.concat(location.tags), [])
  )
  tags = [...new Set(tags)].sort()
  tags.unshift('all')

  return (
    <div className={'overflow-x-scroll flex' + ' ' + className}>
      {tags.map((tag, i) => (
        <div
          className={
            'p-1 px-4 rounded-lg w-min mr-2' +
            ' ' +
            (filterTag === tag ? 'bg-green-600 text-white' : 'bg-green-100')
          }
          key={i}
          onClick={() => setFilterTag(tag)}
        >
          {t(`tags.${tag}`)}
        </div>
      ))}
    </div>
  )
}

const LocationsPage = () => {
  const [filterTag, setFilterTag] = React.useState('all')

  let locations = useLocationsStore((state) => state.locations)
  // locations = locations.sort((a, b) =>
  //   t(a.title) < t(b.title) ? -1 : t(a.title) > t(b.title) ? 1 : 0
  // )
  const [displayLocations, setDisplayLocations] = React.useState(locations)

  React.useEffect(() => {
    setDisplayLocations(
      locations.filter(
        (location) => location.tags.includes(filterTag) || filterTag === 'all'
      )
    )
  }, [filterTag])

  document.body.style.backgroundColor = '#e5e7eb'

  return (
    <div className='flex flex-col mb-8'>
      <div className='flex-1 w-screen p-4' style={{ flex: 9 }}>
        <div className='mb-4 bg-white py-2 px-3 rounded-lg'>
          <h1 className='font-medium mb-1 text-xl'>Filter</h1>
          <FilterList setFilterTag={setFilterTag} filterTag={filterTag} />
        </div>

        {displayLocations.map((location) => (
          <LocationCard location={location} key={location.id} />
        ))}
      </div>
      <NavButtons fixed />
    </div>
  )
}

export default LocationsPage
