import { ExistingCharacters } from '@/database/Characters'
import { SingleChatType } from '@/types/SingleChatType'
import { UserChatsType } from '@/types/UserChatsType'
import { v4 as uuidv4 } from 'uuid'

const chatId1 = 'c798472a-f511-49ce-9151-014e0cd39c20'
const chatId2 = 'c798472a-f511-49ce-9151-014e0cd39c21'

export const InitialSingleChats: UserChatsType = {
  [chatId1]: {
    id: chatId1,
    member: ExistingCharacters.JON,
    messages: [
      {
        content: 'Hey! How are you doing?',
        dtSend: new Date('2023-11-18 08:42:20'),
        user: ExistingCharacters.JON
      }
    ],
    pinned: false,
    lastMessage: {
      content: 'Hey! How are you doing?',
      dtSend: new Date('2023-11-18 08:42:20'),
      user: ExistingCharacters.JON
    },
    unreadMessages: 1
  } as SingleChatType,
  [chatId2]: {
    id: chatId2,
    member: ExistingCharacters.DAENERYS,
    messages: [
      {
        content: 'Jon is such a fool',
        dtSend: new Date('2023-11-18 08:41:20'),
        user: ExistingCharacters.DAENERYS
      }
    ],
    pinned: false,
    lastMessage: {
      content: 'Jon is such a fool',
      dtSend: new Date('2023-11-18 08:42:20'),
      user: ExistingCharacters.DAENERYS
    },
    unreadMessages: 1
  } as SingleChatType
}
