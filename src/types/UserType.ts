import { EntityType } from './BaseTypes'

export type UserType = {
  house: string | null
  profile: string
  color: string
} & EntityType
