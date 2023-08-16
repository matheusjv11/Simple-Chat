import { ExistingCharacters } from '@/database/Characters'
import { SingleChatType } from '@/types/SingleChatType'

export const InitialSingleChats: SingleChatType[] = [
  {
    member: ExistingCharacters.JON,
    messages: [
      {
        content: 'Hey! How are you doing?',
        dtSend: '2023-08-16 15:30:20',
        user: ExistingCharacters.JON
      }
    ],
    pinned: false,
    lastMessage: {
      content: 'Hey! How are you doing?',
      dtSend: '2023-08-16 15:30:20',
      user: ExistingCharacters.JON
    }
  }
]
