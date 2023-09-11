import { ExistingCharacters } from '@/database/Characters'
import { GroupChatType } from '@/types/GroupChatType'
import { UserChatsType } from '@/types/UserChatsType'
import { v4 as uuidv4 } from 'uuid'

const chatId1 = uuidv4()

export const InitialGroupChats: UserChatsType = {
  [chatId1]: {
    id: chatId1,
    members: [
      ExistingCharacters.JON,
      ExistingCharacters.SANSA,
      ExistingCharacters.ARYA
    ],
    name: 'Brothers',
    description: 'First group test',
    messages: [
      {
        content: 'Hey everybody!',
        dtSend: '2023-08-13 14:25:20',
        user: ExistingCharacters.JON
      },
      {
        content: 'Hello Brother! Long time no see',
        dtSend: '2023-08-13 14:30:20',
        user: ExistingCharacters.ARYA
      }
    ],
    pinned: false,
    lastMessage: {
      content: 'Hello Brother! Long time no see',
      dtSend: '2023-08-13 14:30:20',
      user: ExistingCharacters.ARYA
    },
    unreadMessages: 0
  } as GroupChatType
}
