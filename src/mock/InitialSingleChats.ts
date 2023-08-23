import { ExistingCharacters } from '@/database/Characters'
import { SingleChatType } from '@/types/SingleChatType'
import { UserChatsType } from '@/types/UserChatsType'
import { v4 as uuidv4 } from 'uuid'

const chatId1 = uuidv4()

export const InitialSingleChats: UserChatsType = {
  [chatId1]: {
    id: chatId1,
    member: ExistingCharacters.JON,
    messages: [
      {
        content: 'Hey! How are you doing?',
        dtSend: '2023-08-18 08:42:20',
        user: ExistingCharacters.JON
      }
    ],
    pinned: false,
    lastMessage: {
      content: 'Hey! How are you doing?',
      dtSend: '2023-08-18 08:42:20',
      user: ExistingCharacters.JON
    }
  } as SingleChatType
}
