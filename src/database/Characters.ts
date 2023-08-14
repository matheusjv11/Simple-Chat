import { UserType } from '@/types/UserType'

export enum ExistingCharacters {
  JON = 'jon',
  SANSA = 'sansa',
  NED = 'ned'
}

export const Characters: Record<ExistingCharacters, UserType> = {
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
  }
  /*   catelyn: {
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
  daenerys: {
    name: 'Daenerys Targaryen',
    house: 'targaryen'
  },
  tywin: {
    name: 'Tywin Lannister',
    house: 'lannister'
  },
  arya: {
    name: 'Arya Stark',
    house: 'stark'
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
  baelish: {
    name: 'Petyr Baelish',
    house: 'baelish'
  },
  melisandre: {
    name: 'Melisandre',
    house: null
  },
  olenna: {
    name: 'Olenna Tyrell',
    house: 'tyrell'
  } */
}
