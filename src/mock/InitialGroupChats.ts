import { ExistingCharacters } from '@/database/Characters'
import { GroupChatType } from '@/types/GroupChatType'

export const InitialGroupChats: GroupChatType[] = [
  {
    members: [
      ExistingCharacters.JON,
      ExistingCharacters.SANSA,
      ExistingCharacters.ARYA
    ],
    name: 'Brothers',
    description: 'First group test',
    messages: [
      {
        content: 'Group message test',
        dtSend: '2023-08-13 14:25:20',
        user: ExistingCharacters.JON
      }
    ],
    pinned: false,
    lastMessage: {
      content: 'Group message test',
      dtSend: '2023-08-13 14:25:20',
      user: ExistingCharacters.JON
    }
  }
]
