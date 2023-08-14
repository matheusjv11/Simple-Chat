import { ExistingCharacters } from '@/database/Characters'
import { GroupChatType } from '@/types/GroupChatType'

export const InitialGroupChats: GroupChatType[] = [
  {
    members: [ExistingCharacters.JON, ExistingCharacters.SANSA],
    name: 'Brothers',
    description: 'First group test',
    messages: [
      {
        content: 'Group message test',
        dtSend: '2023',
        user: ExistingCharacters.JON
      }
    ],
    pinned: false
  }
]
