import { ExistingCharacters } from '@/database/Characters'
import { GroupChatType } from '@/types/GroupChatType'
import { v4 as uuidv4 } from 'uuid';

export const InitialGroupChats: GroupChatType[] = [
  {
    id: uuidv4(),
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
