import { ExistingCharacters } from '@/database/Characters'
import { ChatType } from './BaseTypes'

export type GroupChatType = {
  members: ExistingCharacters[],
  name: string,
  description: string,
} & ChatType
