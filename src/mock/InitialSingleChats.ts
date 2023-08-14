import { ExistingCharacters } from '@/database/Characters'
import { SingleChatType } from '@/types/SingleChatType'

export const InitialSingleChats: SingleChatType[] = [
  {
    member: ExistingCharacters.JON,
    messages: [
      {
        content: 'Just a Test',
        dtSend: '2023',
        user: ExistingCharacters.JON
      }
    ],
    pinned: false
  }
]
