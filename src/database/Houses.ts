import { HouseType } from '@/types/HouseType'

export const Houses: Record<string, HouseType> = {
  stark: {
    name: 'House Stark of Winterfell'
  },
  lannister: {
    name: 'House Lannister of Casterly Rock'
  },
  baratheon: {
    name: 'House Baratheon of Dragonstone'
  },
  targaryen: {
    name: "House Targaryen of King's Landing"
  },
  greyjoy: {
    name: 'House Greyjoy of Pyke'
  },
  tarly: {
    name: 'House Tarly of Horn Hill'
  },
  tarth: {
    name: 'House Tarth of Evenfall Hall'
  },
  bolton: {
    name: 'House Bolton of the Dreadfort'
  },
  baelish: {
    name: 'House Baelish of Harrenhal'
  },
  tyrell: {
    name: 'House Tyrell of Highgarden'
  }
} as const

export type ExistingHouses = keyof typeof Houses
