import { UserType } from '@/types/UserType'

export const Characters: Record<string, UserType> = {
  jon: {
    name: 'Jon Snow',
    house: 'stark'
  },
  sansa: {
    name: 'Sansa Stark',
    house: 'stark'
  },
  ned: {
    name: 'Eddard "Ned" Stark',
    house: 'stark'
  },
  catelyn: {
    name: 'Catelyn Stark',
    house: 'stark'
  },
  jaime: {
    name: 'Jaime Lannister',
    house: 'lannister'
  },
  tyrion: {
    name: 'Tyrion Lannister',
    house: 'lannister'
  },
  cersei: {
    name: 'Cersei Lannister',
    house: 'lannister'
  },
  joffrey: {
    name: 'Joffrey Baratheon',
    house: 'baratheon'
  },
  aerys: {
    name: 'Aerys II Targaryen',
    house: 'targaryen'
  },
  aemon: {
    name: 'Aemon Targaryen',
    house: 'targaryen'
  },
  daenerys: {
    name: 'Daenerys Targaryen',
    house: 'targaryen'
  },
  tywin: {
    name: 'Tywin Lannister',
    house: 'lannister'
  },
  ramsay: {
    name: 'Ramsay Bolton',
    house: 'bolton'
  },
  arya: {
    name: 'Arya Stark',
    house: 'stark'
  },
  robert: {
    name: 'Robert Baratheon',
    house: 'baratheon'
  },
  theon: {
    name: 'Theon Greyjoy',
    house: 'greyjoy'
  },
  samwell: {
    name: 'Samwell Tarly',
    house: 'tarly'
  },
  varys: {
    name: 'Lord Varys',
    house: null
  },
  bran: {
    name: 'Bran Stark',
    house: 'stark'
  },
  brienne: {
    name: 'Brienne of Tharth',
    house: 'tarth'
  },
  baelish: {
    name: 'Petyr Baelish',
    house: 'baelish'
  },
  tormund: {
    name: 'Tormund',
    house: null
  },
  melisandre: {
    name: 'Melisandre',
    house: null
  },
  olenna: {
    name: 'Olenna Tyrell',
    house: 'tyrell'
  },
  mance: {
    name: 'Mance Rayder',
    house: null
  },
  ygritte: {
    name: 'Ygritte',
    house: null
  }
} as const

export type ExistingCharacters = keyof typeof Characters
