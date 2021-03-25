import React from 'react'
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  useMapEvents,
  Marker,
} from 'react-leaflet'
import L from 'leaflet'

import route_south from '../../public/route-south.json'
import route_north from '../../public/route-north.json'

import shallow from 'zustand/shallow'
import { useLanguageStore } from '../stores/languageStore'
import { useMapStore } from '../stores/mapStore'
import { useLocationsStore } from '../stores/locationsStore'
import { useLocation } from 'react-router-dom'

import NavButtons from '../components/NavButtons'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import LocationPopup from '../components/LocationPopup'

let DefaultIcon = new L.Icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  popupAnchor: [4, -41],
  iconAnchor: [10, 40],
})

const formatCoords = (geojson) =>
  geojson.features[0].geometry.coordinates.map((coord) => [coord[1], coord[0]])

const MapControl = ({ _setZoom, _setPosition }) => {
  const map = useMapEvents({
    moveend: () => {
      const { lat, lng } = map.getCenter()
      _setPosition([lat, lng])
      _setZoom(map.getZoom())
    },
    popupopen: (e) => {
      const { lat, lng } = e.popup.getLatLng()
      let point = map.latLngToContainerPoint([lat, lng])
      point = L.point([point.x, point.y - 150])
      const newLatLng = map.containerPointToLatLng(point)
      map.panTo(newLatLng)
    },
  })
  return null
}

const LandingPage = () => {
  const location = useLocation()

  const [map, setMap] = React.useState(null)

  const [language, changeLanguage, checkLanguage] = useLanguageStore(
    (state) => [state.language, state.changeLanguage, state.checkLanguage],
    shallow
  )

  const locationInfo = useLocationsStore((state) =>
    state.locations.map(({ id, coords, mainImg, title, text }) => ({
      id,
      coords,
      mainImg,
      title,
      text,
    }))
  )

  const [position, zoom, setPosition, setZoom, routes] = useMapStore(
    (state) => [
      state.position,
      state.zoom,
      state.setPosition,
      state.setZoom,
      state.routes,
    ],
    shallow
  )

  const polyline_south_route = new L.polyline(formatCoords(route_south), {
    color: 'blue',
    weight: 4,
  })

  const polyline_north_route = new L.polyline(formatCoords(route_north), {
    color: 'green',
    weight: 4,
  })

  React.useEffect(() => {
    checkLanguage()
  }, [])

  React.useEffect(() => {
    if (location.state && map && location.state.length > 0) {
      map.setView(location.state.panTo, 17)
      location.state = {}
    }

    if (map && routes.south) {
      polyline_south_route.addTo(map)
    }

    if (map && routes.north) {
      polyline_north_route.addTo(map)
    }
  }, [map])

  const handleTestButtonClick = () => {
    changeLanguage(language === 'hr' ? 'en' : 'hr')
  }

  return (
    <div
      className='flex flex-col relative'
      style={{ height: window.innerHeight }}
    >
      <div className='flex h-full w-screen'>
        <MapContainer
          center={position}
          zoom={zoom}
          zoomControl={false}
          minZoom={3}
          whenCreated={setMap}
          maxBounds={[
            [-89.98155760646617, -180],
            [89.99346179538875, 180],
          ]}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
          <ZoomControl position='bottomright' />

          {locationInfo.map((info) => (
            <Marker position={info.coords} key={info.id} icon={DefaultIcon}>
              <LocationPopup info={info} />
            </Marker>
          ))}

          {/* {userCoords.latitude && userCoords.latitude && (
            <Marker
              position={[userCoords.latitude, userCoords.longitude]}
              icon={DefaultIcon}
            ></Marker>
          )} */}

          <MapControl
            _setPosition={(pos) => setPosition(pos)}
            _setZoom={(zoom) => setZoom(zoom)}
          />
        </MapContainer>
      </div>
      <div
        className='absolute bottom-14 left-4 py-2 px-4 rounded-lg bg-white'
        style={{ zIndex: 1000 }}
        onClick={handleTestButtonClick}
      >
        {language}
      </div>
      <NavButtons />
    </div>
  )
}

export default LandingPage
