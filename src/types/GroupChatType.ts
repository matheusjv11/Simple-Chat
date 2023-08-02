import { ExistingCharacters } from '@/database/Characters'
import { ChatType } from './BaseTypes'

export type GroupChatType = {
  members: ExistingCharacters[]
} & ChatType
