import { ExistingCharacters } from '@/database/Characters'

export type MessageType = {
  content: string
  dtSend: Date
  user: ExistingCharacters | 'currentUser'
}
