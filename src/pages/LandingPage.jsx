import React from 'react'
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  useMapEvents,
  Polyline,
  Marker,
} from 'react-leaflet'
import L from 'leaflet'

import geojson from '../assets/geojson.json'

import shallow from 'zustand/shallow'
import { useMapStore } from '../stores/mapStore'
import { useLocationsStore } from '../stores/locationsStore'
import { useLocation } from 'react-router-dom'

import NavButtons from '../components/NavButtons'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import LocationPopup from '../components/LocationPopup'
import { useTranslation } from 'react-i18next'

let DefaultIcon = new L.Icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  popupAnchor: [13, 1],
})

const MapControl = ({ _setZoom, _setPosition }) => {
  const map = useMapEvents({
    moveend: () => {
      const { lat, lng } = map.getCenter()
      _setPosition([lat, lng])
      _setZoom(map.getZoom())
    },
    popupopen: (e) => {
      const { lat, lng } = e.popup.getLatLng()
      map.panTo([lat, lng])

      let newGeojson = geojson.features[0].geometry.coordinates.map((coord) => [
        coord[0],
        coord[1],
      ])
      // console.log(newGeojson)

      let polyline = new L.Polyline(newGeojson, { color: 'red' }).addTo(map)
      console.log(polyline)
    },
  })
  return null
}

const LandingPage = () => {
  const { i18n } = useTranslation()
  const location = useLocation()
  const [map, setMap] = React.useState(null)

  const [userCoords, setUserCoords] = React.useState({})

  const locationInfo = useLocationsStore((state) =>
    state.locations.map(({ id, coords, mainImg, title }) => ({
      id,
      coords,
      mainImg,
      title,
    }))
  )

  const [position, zoom, setPosition, setZoom] = useMapStore(
    (state) => [state.position, state.zoom, state.setPosition, state.setZoom],
    shallow
  )

  React.useEffect(() => {
    if (location.state && map) {
      map.setView(location.state.panTo, 15)
      location.state = {}
    }

    // if (navigator.geolocation) {
    //   navigator.geolocation.watchPosition(
    //     (pos) => {
    //       setUserCoords(pos.coords)
    //     },
    //     (error) => {
    //       console.log('[ERROR GETTING LOCATION]: ', error)
    //     },
    //     { timeout: 500 }
    //   )
    // }
  }, [map])

  const handleTestButtonClick = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (pos) => {
    //       console.log(pos)
    //     },
    //     (error) => {
    //       console.log(error)
    //     },
    //     { timeout: 500 }
    //   )
    // }
    i18n.changeLanguage(i18n.language === 'hr' ? 'en' : 'hr')
    console.log(geojson)
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
          minZoom={4}
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

          {locationInfo.map((info, index) => (
            <Marker position={info.coords} key={info.id} icon={DefaultIcon}>
              <LocationPopup info={info} />
            </Marker>
          ))}

          {userCoords.latitude && userCoords.latitude && (
            <Marker
              position={[userCoords.latitude, userCoords.longitude]}
              icon={DefaultIcon}
            ></Marker>
          )}

          <MapControl
            _setPosition={(pos) => setPosition(pos)}
            _setZoom={(zoom) => setZoom(zoom)}
          />
          <Polyline
            positions={geojson.features[0].geometry.coordinates.map((coord) => [
              coord[0],
              coord[1],
            ])}
          />
        </MapContainer>
      </div>
      <div
        className='absolute bottom-14 left-4 py-2 px-4 rounded-lg bg-white'
        style={{ zIndex: 1000 }}
        onClick={handleTestButtonClick}
      >
        {i18n.language[0].toUpperCase() + i18n.language.substr(1)}
      </div>
      <NavButtons />
    </div>
  )
}

export default LandingPage
