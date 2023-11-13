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
    color: '#809bce',
    banner: '/img/banners/ned.jpeg'
  },
  catelyn: {
    name: 'Catelyn Stark',
    house: 'stark',
    profile: '/img/profiles/catelyn.jpg',
    color: '#95b8d1',
    banner: '/img/banners/catelyn.jpg'
  },
  jaime: {
    name: 'Jaime Lannister',
    house: 'lannister',
    profile: '/img/profiles/jaime.jpg',
    color: '#b8e0d2',
    banner: '/img/banners/jaime.jpg'
  },
  tyrion: {
    name: 'Tyrion Lannister',
    house: 'lannister',
    profile: '/img/profiles/tyrion.jpg',
    color: '#d6eadf',
    banner: '/img/banners/tyrion.jpg'
  },
  cersei: {
    name: 'Cersei Lannister',
    house: 'lannister',
    profile: '/img/profiles/cersei.jpg',
    color: '#eac4d5',
    banner: '/img/banners/cersei.jpg'
  },
  joffrey: {
    name: 'Joffrey Baratheon',
    house: 'baratheon',
    profile: '/img/profiles/joffrey.jpg',
    color: '#d3ab9e',
    banner: '/img/banners/joffrey.jpg'
  },
  daenerys: {
    name: 'Daenerys Targaryen',
    house: 'targaryen',
    profile: '/img/profiles/daenerys.jpg',
    color: '#f2bac9',
    banner: '/img/banners/daenerys.jpg'
  },
  tywin: {
    name: 'Tywin Lannister',
    house: 'lannister',
    profile: '/img/profiles/tywin.jpg',
    color: '#a8e6cf',
    banner: '/img/banners/tywin.jpg'
  },
  theon: {
    name: 'Theon Greyjoy',
    house: 'greyjoy',
    profile: '/img/profiles/theon.jpg',
    color: '#a2d2ff',
    banner: '/img/banners/theon.jpg'
  },
  samwell: {
    name: 'Samwell Tarly',
    house: 'tarly',
    profile: '/img/profiles/samwell.jpg',
    color: '#bde0fe',
    banner: '/img/banners/samwell.jpg'
  },
  varys: {
    name: 'Lord Varys',
    house: null,
    profile: '/img/profiles/varys.jpg',
    color: '#ffafcc',
    banner: '/img/banners/varys.jpg'
  },
  bran: {
    name: 'Bran Stark',
    house: 'stark',
    profile: '/img/profiles/bran.jpg',
    color: '#ffc8dd',
    banner: '/img/banners/bran.jpg'
  },
  baelish: {
    name: 'Petyr Baelish',
    house: 'baelish',
    profile: '/img/profiles/baelish.jpg',
    color: '#cdb4db',
    banner: '/img/banners/baelish.jpg'
  },
  melisandre: {
    name: 'Melisandre',
    house: null,
    profile: '/img/profiles/melisandre.jpg',
    color: '#ff8fab',
    banner: '/img/banners/melisandre.jpg'
  },
  olenna: {
    name: 'Olenna Tyrell',
    house: 'tyrell',
    profile: '/img/profiles/olenna.jpg',
    color: '#a5ffd6',
    banner: '/img/banners/olenna.jpg'
  }
}
