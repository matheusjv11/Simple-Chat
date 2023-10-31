import { EntityType } from './BaseTypes'

export type UserType = {
  house: string | null
  profile: string
  banner: string
  color: string
} & EntityType
