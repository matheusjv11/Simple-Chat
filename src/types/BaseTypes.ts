import { MessageType } from './MessageType'

export type EntityType = {
  name: string
}

export type ChatType = {
  id: string,
  messages: MessageType[]
  pinned: boolean
  lastMessage?: MessageType
}
