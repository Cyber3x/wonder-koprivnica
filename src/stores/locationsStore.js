import create from 'zustand'

import podravka1 from '/images/podravka1.jpg'
import podravka2 from '/images/podravka2.jpg'

import danica1 from '/images/danica1.jpg'
import danica2 from '/images/danica2.jpg'
import danica3 from '/images/danica3.jpg'

export const useLocationsStore = create(() => ({
  locations: [
    {
      id: 0,
      title: 'Podravka',
      tags: ['history', 'city', 'food'],
      mainImg: podravka1,
      coords: [46.1669, 16.82297],
      moreImages: [podravka2, podravka1],
      text: 'location.podravka.text',
      links: [{ lable: 'Podravka', link: 'https://www.podravka.com/' }],
    },
    {
      id: 1,
      title: 'Danica',
      tags: ['city', 'history'],
      mainImg: danica1,
      coords: [46.1867, 16.834],
      moreImages: [danica2, danica3],
      text: 'location.danica.text',
      links: [
        { lable: 'Muzej Koprivnica', link: 'http://www.muzej-koprivnica.hr/' },
      ],
    },
  ],
}))
