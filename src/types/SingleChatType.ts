import { ExistingCharacters } from '@/database/Characters'
import { ChatType } from './BaseTypes'

export type SingleChatType = {
  member: ExistingCharacters
} & ChatType
