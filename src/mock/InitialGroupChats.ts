import { ExistingCharacters } from '@/database/Characters'
import { GroupChatType } from '@/types/GroupChatType'
import { UserChatsType } from '@/types/UserChatsType'
import { v4 as uuidv4 } from 'uuid'

const chatId1 = 'f325de59-6468-4e5f-8f62-c20a45929673'
const chatId2 = 'f325de59-6468-4e5f-8f62-c20a45929674'
const chatId3 = 'f325de59-6468-4e5f-8f62-c20a45929675'

export const InitialGroupChats: UserChatsType = {
  [chatId1]: {
    id: chatId1,
    members: [
      ExistingCharacters.JON,
      ExistingCharacters.SANSA,
      ExistingCharacters.ARYA,
      ExistingCharacters.NED,
      ExistingCharacters.CATELYN,
      ExistingCharacters.BRAN
    ],
    name: 'Starks',
    description:
      'House Stark of Winterfell is a Great House of Westeros and the royal house of the Kingdom of the North. They rule over the vast region known as the North from their seat in Winterfell.',
    messages: [
      {
        content: 'Hey everybody!',
        dtSend: new Date('2023-11-18 14:25:20'),
        user: ExistingCharacters.JON
      },
      {
        content:
          'Hello Brother! Long time no see. Can you teach me how to ride a dragon?',
        dtSend: new Date('2023-11-18 14:30:20'),
        user: ExistingCharacters.ARYA
      }
    ],
    pinned: true,
    lastMessage: {
      content:
        'Hello Brother! Long time no see. Can you teach me how to ride a dragon?',
      dtSend: new Date('2023-11-18 14:30:20'),
      user: ExistingCharacters.ARYA
    },
    unreadMessages: 2
  } as GroupChatType,
  [chatId2]: {
    id: chatId2,
    members: [
      ExistingCharacters.JAIME,
      ExistingCharacters.CERSEI,
      ExistingCharacters.JOFFREY,
      ExistingCharacters.TYRION,
      ExistingCharacters.TYWIN
    ],
    name: 'Lannisters',
    description:
      'House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and one of its oldest dynasties.',
    messages: [
      {
        content: 'I hate everyone here',
        dtSend: new Date('2023-11-02 15:25:20'),
        user: ExistingCharacters.JOFFREY
      },
      {
        content: 'What a surprise',
        dtSend: new Date('2023-11-02 15:26:50'),
        user: ExistingCharacters.TYRION
      },
      {
        content: 'Can you bahave just once?',
        dtSend: new Date('2023-11-02 15:28:00'),
        user: ExistingCharacters.CERSEI
      }
    ],
    pinned: false,
    lastMessage: {
      content: 'Can you bahave just once?',
      dtSend: new Date('2023-12-02 15:28:00'),
      user: ExistingCharacters.CERSEI
    },
    unreadMessages: 3
  } as GroupChatType,
  [chatId3]: {
    id: chatId3,
    members: [
      ExistingCharacters.JON,
      ExistingCharacters.DAENERYS,
      ExistingCharacters.JOFFREY,
      ExistingCharacters.BRAN,
      ExistingCharacters.TYWIN
    ],
    name: 'Who wants to be king?',
    description: 'Whoever have the better argument takes the crown',
    messages: [
      {
        content: 'I am already king, there is no discussion',
        dtSend: new Date('2023-11-17 15:25:20'),
        user: ExistingCharacters.JOFFREY
      },
      {
        content: 'Well...',
        dtSend: new Date('2023-11-17 15:27:20'),
        user: ExistingCharacters.BRAN
      },
      {
        content: 'The crown is mine by right',
        dtSend: new Date('2023-11-17 15:26:20'),
        user: ExistingCharacters.DAENERYS
      }
    ],
    pinned: false,
    lastMessage: {
      content: 'The crown is mine by right',
      dtSend: new Date('2023-11-17 15:26:20'),
      user: ExistingCharacters.DAENERYS
    },
    unreadMessages: 3
  } as GroupChatType
}
