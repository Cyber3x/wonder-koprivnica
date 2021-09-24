import create from 'zustand'

import podravka1 from '/images/podravka/1.jpg'
import podravka2 from '/images/podravka/2.jpg'
import podravka3 from '/images/podravka/3.jpg'
import podravka4 from '/images/podravka/4.jpg'

import danica1 from '/images/danica/1.jpg'
import danica2 from '/images/danica/2.jpg'
import danica3 from '/images/danica/3.jpg'
import danica4 from '/images/danica/4.jpg'
import danica5 from '/images/danica/5.jpg'
import danica6 from '/images/danica/6.jpg'
import danica7 from '/images/danica/7.jpg'

import ang1 from '/images/ang/1.jpg'
import ang2 from '/images/ang/2.jpg'
import ang3 from '/images/ang/3.jpg'
import ang4 from '/images/ang/4.jpg'

import vila_parva1 from '/images/vila_parva/1.jpg'
import vila_parva2 from '/images/vila_parva/2.jpg'

import crkva_sv_nikole1 from '/images/crkva_sv_nikole/1.jpg'
import crkva_sv_nikole2 from '/images/crkva_sv_nikole/2.jpg'
import crkva_sv_nikole3 from '/images/crkva_sv_nikole/3.jpg'
import crkva_sv_nikole4 from '/images/crkva_sv_nikole/4.jpg'
import crkva_sv_nikole5 from '/images/crkva_sv_nikole/5.jpg'

import park1 from '/images/park/1.jpg'
import park2 from '/images/park/2.jpg'
import park3 from '/images/park/3.jpg'
import park4 from '/images/park/4.jpg'
import park5 from '/images/park/5.jpg'

import vojarna1 from '/images/vojarna/1.jpeg'
import vojarna2 from '/images/vojarna/2.jpg'
import vojarna3 from '/images/vojarna/3.jpg'
import vojarna4 from '/images/vojarna/4.jpg'
import vojarna5 from '/images/vojarna/5.jpg'

import sud1 from '/images/sud/1.jpg'
import sud2 from '/images/sud/2.jpg'
import sud3 from '/images/sud/3.jpg'
import sud4 from '/images/sud/4.jpg'

import stadion1 from '/images/stadion/1.jpg'
import stadion2 from '/images/stadion/2.jpg'
import stadion3 from '/images/stadion/3.jpg'

import sinagoga1 from '/images/sinagoga/1.jpg'
import sinagoga2 from '/images/sinagoga/2.jpg'
import sinagoga3 from '/images/sinagoga/3.jpg'

import prc1 from '/images/prc/1.jpg'
import prc2 from '/images/prc/2.jpg'
import prc3 from '/images/prc/3.jpg'
import prc4 from '/images/prc/4.jpg'
import prc5 from '/images/prc/5.jpg'

import muzej_prehrane1 from '/images/muzej_prehrane/1.jpg'
import muzej_prehrane2 from '/images/muzej_prehrane/2.jpg'
import muzej_prehrane3 from '/images/muzej_prehrane/3.jpg'
import muzej_prehrane4 from '/images/muzej_prehrane/4.jpg'
import muzej_prehrane5 from '/images/muzej_prehrane/5.jpg'

import muzej_grada1 from '/images/muzej_grada/1.jpg'
import muzej_grada2 from '/images/muzej_grada/2.jpg'
import muzej_grada3 from '/images/muzej_grada/3.jpg'
import muzej_grada4 from '/images/muzej_grada/4.jpg'

import gradska_palaca1 from '/images/gradska_palaca/1.jpg'

import galerija1 from '/images/galerija/1.jpg'
import galerija2 from '/images/galerija/2.jpg'
import galerija3 from '/images/galerija/3.jpg'

export const useLocationsStore = create(() => ({
  locations: [
    {
      id: 0,
      title: 'Podravka',
      tags: ['history', 'city', 'food'],
      mainImg: podravka1,
      coords: [46.1669, 16.82297],
      moreImages: [podravka2, podravka3, podravka4],
      text: 'location.podravka.text',
      links: [{ lable: 'Podravka', link: 'https://www.podravka.com/' }],
    },
    {
      id: 1,
      title: 'location.danica.title',
      tags: ['city', 'history'],
      mainImg: danica2,
      coords: [46.1867, 16.834],
      moreImages: [danica1, danica3, danica4, danica5, danica6, danica7],
      text: 'location.danica.text',
      links: [
        {
          lable: 'Danica',
          link:
            'http://www.muzej-koprivnica.hr/o-nama/objekti-i-zbirke/danica/',
        },
      ],
    },
    {
      id: 2,
      title: 'Antun Nemčić Gostovinski',
      tags: ['city', 'history'],
      mainImg: ang4,
      coords: [46.16048, 16.82926],
      moreImages: [ang1, ang2, ang3],
      text: 'location.antun_nemcic_gostovinski.text',
      links: [
        { lable: 'Antun Nemčić Gostovniski', link: 'http://www.osang-kc.hr/' },
      ],
    },
    {
      id: 3,
      title: 'Villa Parva',
      tags: ['city', 'history', 'drink'],
      mainImg: vila_parva1,
      coords: [46.16393, 16.82983],
      moreImages: [vila_parva2],
      text: 'location.villa_parva.text',
    },
    {
      id: 4,
      title: 'location.crkva_sv_nikole.title',
      tags: ['city', 'history'],
      mainImg: crkva_sv_nikole1,
      coords: [46.1612, 16.83137],
      moreImages: [
        crkva_sv_nikole5,
        crkva_sv_nikole4,
        crkva_sv_nikole2,
        crkva_sv_nikole3,
      ],
      text: 'location.crkva_sv_nikole.text',
      links: [
        {
          lable: 'location.crkva_sv_nikole.lable',
          link: 'https://zupasvnikolakc.hr/',
        },
      ],
    },
    {
      id: 5,
      title: 'location.park.title',
      tags: ['city', 'nature', 'sport', 'fun'],
      mainImg: park1,
      coords: [46.16176, 16.83078],
      moreImages: [park2, park3, park4, park5],
      text: 'location.park.text',
    },
    {
      id: 6,
      title: 'location.vojarna.title',
      tags: ['history', 'nature'],
      mainImg: vojarna1,
      coords: [46.17568, 16.84215],
      moreImages: [vojarna5, vojarna2, vojarna3, vojarna4],
      text: 'location.vojarna.text',
      links: [
        {
          lable: 'location.vojarna.lable',
          link: 'https://www.kampus-koprivnica.hr/',
        },
      ],
    },
    {
      id: 7,
      title: 'location.sud.title',
      tags: ['city'],
      mainImg: sud3,
      coords: [46.16285, 16.82794],
      moreImages: [sud1, sud2, sud4],
      text: 'location.sud.text',
      links: [
        {
          lable: 'location.sud.title',
          link: 'https://sudovi.hr/en/oskc',
        },
      ],
    },
    {
      id: 8,
      title: 'location.stadion.title',
      tags: ['city', 'sport', 'fun'],
      mainImg: stadion1,
      coords: [46.1663, 16.83479],
      moreImages: [stadion2, stadion3],
      text: 'location.stadion.text',
      links: [
        {
          lable: 'location.stadion.title',
          link: 'https://nk-slaven-belupo.hr/stadion/',
        },
      ],
    },
    {
      id: 9,
      title: 'location.sinagoga.title',
      tags: ['city', 'history'],
      mainImg: sinagoga1,
      coords: [46.16432, 16.83207],
      moreImages: [sinagoga2, sinagoga3],
      text: 'location.sinagoga.text',
    },
    {
      id: 10,
      title: 'Podravkin Rekreacijski Centar',
      tags: ['nature', 'sport', 'drink', 'food', 'fun'],
      mainImg: prc1,
      coords: [46.1272, 16.8075],
      moreImages: [prc2, prc3, prc4, prc5],
      text: 'location.prc.text',
      links: [
        {
          lable: 'Podravska klet',
          link: 'https://www.podravka-ugostiteljstvo.hr/podravska-klet/',
        },
      ],
    },
    {
      id: 11,
      title: 'location.muzej_prehrane.title',
      tags: ['history', 'city'],
      mainImg: muzej_prehrane1,
      coords: [46.15391, 16.82445],
      moreImages: [
        muzej_prehrane2,
        muzej_prehrane3,
        muzej_prehrane4,
        muzej_prehrane5,
      ],
      text: 'location.muzej_prehrane.text',
    },
    {
      id: 12,
      title: 'location.muzej_grada.title',
      tags: ['history', 'city'],
      mainImg: muzej_grada1,
      coords: [46.15984, 16.83156],
      moreImages: [muzej_grada2, muzej_grada3, muzej_grada4],
      text: 'location.muzej_grada.text',
      links: [
        {
          lable: 'location.muzej_grada.title',
          link: 'https://www.muzej-koprivnica.hr/',
        },
      ],
    },
    {
      id: 13,
      title: 'location.gradska_palaca.title',
      tags: ['history', 'city'],
      mainImg: gradska_palaca1,
      coords: [46.16135, 16.83192],
      moreImages: [],
      text: 'location.gradska_palaca.text',
    },
    {
      id: 14,
      title: 'location.galerija.title',
      tags: ['history', 'city'],
      mainImg: galerija1,
      coords: [46.16348, 16.83068],
      moreImages: [galerija2, galerija3],
      text: 'location.galerija.text',
      links: [
        {
          lable: 'location.galerija.title',
          link: 'https://koprivnica.hr/gradani/kultura/muzej-grada-koprivnice/',
        },
      ],
    },
  ],
}))
