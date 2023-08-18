import { ExistingCharacters } from '@/database/Characters'
import { SingleChatType } from '@/types/SingleChatType'
import { v4 as uuidv4 } from 'uuid';

export const InitialSingleChats: SingleChatType[] = [
  {
    id: 'batata' /* uuidv4() */,
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
  }
]
