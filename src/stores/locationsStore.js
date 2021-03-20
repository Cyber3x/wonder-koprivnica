import create from 'zustand'

import image from '../assets/DEsktop.jpg'
import image2 from '../assets/Desktop1.jpg'
import image3 from '../assets/Desktop2.jpg'
import image4 from '../assets/Anavar-Winstrol-cycle-together.jpg'
import image5 from '../assets/autumn-leaves-cold-dry-leaves-2681631.jpg'
import image6 from '../assets/zetong-li-rXXSIr8-f9w-unsplash.jpg'
import { useTranslation } from 'react-i18next'

export const useLocationsStore = create(() => ({
  locations: [
    {
      id: 0,
      title: 'Danica',
      desc:
        'Danica was is a memorial center that serves a purplose of todays memorial center',
      tags: ['history'],
      mainImg: image,
      coords: [46.1889, 16.839],
      moreImages: [image2, image3, image5, image6, image4],
      text: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dolor minima? Nihil aspernatur quasi error, rem veniam, magnam explicabo nesciunt optio et obcaecati esse nam consequatur ipsum vero veritatis! Doloremque labore cumque libero quia necessitatibus quam molestiae aperiam? Eos, saepe ex mollitia tempore in architecto ipsa doloribus non aut iste.',
      ],
    },
    {
      id: 1,
      title: 'Zrinski Trg',
      desc:
        'Danica was is a memorial center that serves a purplose of todays memorial center',
      tags: ['city', 'food', 'drink'],
      mainImg: image6,
      coords: [46.16317, 16.83118],
      moreImages: [],
      text: [],
    },
    {
      id: 2,
      title: 'Stadion',
      desc:
        'Danica was is a memorial center that serves a purplose of todays memorial center',
      tags: ['sport'],
      mainImg: image2,
      coords: [46.16684, 16.83491],
      moreImages: [],
      text: [],
    },
    {
      id: 3,
      title: 'Bašća',
      desc:
        'Danica was is a memorial center that serves a purplose of todays memorial center',
      tags: ['nature'],
      mainImg: image3,
      coords: [46.15924, 16.83389],
      moreImages: [],
      text: [],
    },
    {
      id: 4,
      title: 'Pixel',
      desc:
        'Danica was is a memorial center that serves a purplose of todays memorial center',
      tags: ['drink', 'dance'],
      mainImg: image4,
      coords: [46.16073, 16.82705],
      moreImages: [],
      text: [],
    },
    {
      id: 5,
      title: 'Gradski Muzej eeeeeeeeeeeeeeej',
      desc:
        'Danica was is a memorial center that serves a purplose of todays memorial center',
      tags: ['history'],
      mainImg: image5,
      coords: [46.15984, 16.83155],
      moreImages: [],
      text: [],
    },
  ],
}))
