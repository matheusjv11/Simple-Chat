import { MessageType } from './MessageType'

export type EntityType = {
  name: string
}

export type ChatType = {
  messages: MessageType[]
  pinned: boolean
  lastMessage?: MessageType
}
