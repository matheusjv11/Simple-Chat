import { GroupChatType } from './GroupChatType'
import { SingleChatType } from './SingleChatType'

export type UserChatsType = {
  [k: string]: SingleChatType | GroupChatType
}
