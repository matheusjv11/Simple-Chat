import { MessageType } from './MessageType'

export type EntityType = {
  name: string
}

export type ChatType = {
  id: string
  messages: MessageType[]
  pinned: boolean
  unreadMessages: number
  lastMessage?: MessageType
}
