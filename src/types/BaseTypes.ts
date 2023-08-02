import { MessageType } from "./MessageType"

export type EntityType = {
  name: string
  image?: string
}

export type ChatType = {
  messages: MessageType[]
  pinned: boolean
}