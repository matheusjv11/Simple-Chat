import { UserType } from '@/types/UserType'

export enum ExistingCharacters {
  JON = 'jon',
  SANSA = 'sansa',
  NED = 'ned',
  ARYA = 'arya',
  CATELYN = 'catelyn',
  JAIME = 'jaime',
  CERSEI = 'cersei',
  JOFFREY = 'joffrey',
  TYRION = 'tyrion',
  DAENERYS = 'daenerys',
  TYWIN = 'tywin',
  THEON = 'theon',
  SAMWELL = 'samwell',
  VARYS = 'varys',
  BRAN = 'bran',
  BAELISH = 'baelish',
  MELISANDRE = 'melisandre',
  OLENNA = 'olenna'
}

export const Characters: Record<ExistingCharacters, UserType> = {
  jon: {
    name: 'Jon Snow',
    house: 'stark',
    profile: '/img/profiles/jon.png',
    color: '#CDB4DB',
    banner: '/img/banners/jon.png'
  },
  sansa: {
    name: 'Sansa Stark',
    house: 'stark',
    profile: '/img/profiles/sansa.jpg',
    color: '#A2D2FF',
    banner: '/img/banners/sansa.jpg'
  },
  arya: {
    name: 'Arya Stark',
    house: 'stark',
    profile: '/img/profiles/arya.jpg',
    color: '#FFAFCC',
    banner: '/img/banners/arya.jpg'
  },
  ned: {
    name: 'Eddard "Ned" Stark',
    house: 'stark',
    profile: '/img/profiles/ned.jpeg',
    color: '#FFC8DD',
    banner: '/img/banners/ned.jpeg'
  },
  catelyn: {
    name: 'Catelyn Stark',
    house: 'stark',
    profile: '/img/profiles/catelyn.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/catelyn.jpg'
  },
  jaime: {
    name: 'Jaime Lannister',
    house: 'lannister',
    profile: '/img/profiles/jaime.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/jaime.jpg'
  },
  tyrion: {
    name: 'Tyrion Lannister',
    house: 'lannister',
    profile: '/img/profiles/tyrion.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/tyrion.jpg'
  },
  cersei: {
    name: 'Cersei Lannister',
    house: 'lannister',
    profile: '/img/profiles/cersei.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/cersei.jpg'
  },
  joffrey: {
    name: 'Joffrey Baratheon',
    house: 'baratheon',
    profile: '/img/profiles/joffrey.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/joffrey.jpg'
  },
  daenerys: {
    name: 'Daenerys Targaryen',
    house: 'targaryen',
    profile: '/img/profiles/daenerys.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/daenerys.jpg'
  },
  tywin: {
    name: 'Tywin Lannister',
    house: 'lannister',
    profile: '/img/profiles/tywin.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/tywin.jpg'
  },
  theon: {
    name: 'Theon Greyjoy',
    house: 'greyjoy',
    profile: '/img/profiles/theon.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/theon.jpg'
  },
  samwell: {
    name: 'Samwell Tarly',
    house: 'tarly',
    profile: '/img/profiles/samwell.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/samwell.jpg'
  },
  varys: {
    name: 'Lord Varys',
    house: null,
    profile: '/img/profiles/varys.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/varys.jpg'
  },
  bran: {
    name: 'Bran Stark',
    house: 'stark',
    profile: '/img/profiles/bran.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/bran.jpg'
  },
  baelish: {
    name: 'Petyr Baelish',
    house: 'baelish',
    profile: '/img/profiles/baelish.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/baelish.jpg'
  },
  melisandre: {
    name: 'Melisandre',
    house: null,
    profile: '/img/profiles/melisandre.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/melisandre.jpg'
  },
  olenna: {
    name: 'Olenna Tyrell',
    house: 'tyrell',
    profile: '/img/profiles/olenna.jpg',
    color: '#FFC8DD',
    banner: '/img/banners/olenna.jpg'
  }
}
