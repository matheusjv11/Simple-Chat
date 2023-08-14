import { ExistingCharacters } from '@/database/Characters'

export type MessageType = {
  content: string
  dtSend: string
  user: ExistingCharacters | 'currentUser'
}
