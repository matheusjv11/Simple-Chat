import Router from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import { store } from '@/store'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import { DateUtils } from '@/utils/DateUtils'
import {
  addMessageIntoChat,
  removeChat,
  pinChat,
  unPinChat,
  addChat
} from '@/store/reducers/chatsReducer'
import { UserService } from './UserService'
import { Characters, ExistingCharacters } from '@/database/Characters'
import { ArrayUtils } from '@/utils/ArrayUtils'
import { TypeUtils } from '@/utils/TypeUtils'
import { MessageType } from '@/types/MessageType'
import { UserChatsType } from '@/types/UserChatsType'

export class ChatService {
  /**
   * Orders a given list of chats by its last message's sent date
   *
   * @param ids Given list of chat's ids
   * @returns Ordered list of chats
   */
  public static orderChats(ids: string[]) {
    return [...ids].sort((a, b) => {
      const chatA = this.getChatById(a)
      const chatB = this.getChatById(b)

      if (chatA && chatB) {
        return this.sortFunction(chatA, chatB)
      }

      return 0
    })
  }

  /**
   * Given a target string, searches for compatible chats
   *
   * @param chats Given list of chat's ids
   * @param filter String the chat must contain in its name
   * @returns Filtered list of chats
   */
  public static filterChats(ids: string[], filter: string) {
    return [...ids].filter((id) => {
      const chat = this.getChatById(id)

      if (!chat) {
        return 0
      }

      if (TypeUtils.isSingleChatType(chat)) {
        const member = Characters[chat.member]
        return member.name.toLowerCase().includes(filter.toLocaleLowerCase())
      }

      return chat.name.toLowerCase().includes(filter.toLocaleLowerCase())
    })
  }

  /**
   * Returns a Chat object by its ID
   *
   * @param id Chat ID
   * @returns Chat object
   */
  public static getChatById(
    id: string
  ): SingleChatType | GroupChatType | undefined {
    const storeData = store.getState()
    return storeData.chats.userChats[id]
  }

  /**
   * Inserts a message into a chat from the giver user
   *
   * @param content What goes on the message
   * @param chatId The ID from the target chat
   * @param user User who sent the message
   *
   */
  public static insertMessageIntoChat(
    content: string,
    chatId: string,
    user: ExistingCharacters | 'currentUser' = 'currentUser'
  ): void {
    store.dispatch(
      addMessageIntoChat({
        id: chatId,
        message: {
          content: content,
          dtSend: new Date(),
          user
        }
      })
    )
  }

  public static shouldReorderChats(chatsId: string[], chats: UserChatsType) {
    const orderedChats = chatsId.sort((a, b) => {
      const chatA = chats[a]
      const chatB = chats[b]

      return this.sortFunction(chatA, chatB)
    })

    return chatsId.toString() !== orderedChats.toString()
  }

  public static createSingleChat(member: string, initialMessage: string) {
    const existingId = this.singleChatExistis(member)

    if (!!existingId) {
      this.insertMessageIntoChat(initialMessage, existingId, 'currentUser')
      Router.push(`/chat/${existingId}`)
      return
    }

    const chatId = uuidv4()
    const firstMessage = this.currentUserMessage(initialMessage)

    const singleChat: SingleChatType = {
      id: chatId,
      member,
      messages: [firstMessage],
      pinned: false,
      lastMessage: firstMessage,
      unreadMessages: 0
    }

    store.dispatch(addChat(singleChat))
  }

  public static createGroupChat(
    members: string[],
    initialMessage: string,
    groupName: string,
    groupDescription: string
  ) {
    const chatId = uuidv4()
    const firstMessage = this.currentUserMessage(initialMessage)

    const singleChat: GroupChatType = {
      id: chatId,
      members,
      name: groupName,
      description: groupDescription,
      messages: [firstMessage],
      pinned: false,
      lastMessage: firstMessage,
      unreadMessages: 0
    }

    store.dispatch(addChat(singleChat))
  }

  public static removeChat(id: string): void {
    store.dispatch(removeChat({ id }))
  }

  public static pinChat(id: string): void {
    store.dispatch(pinChat({ id }))
  }

  public static unPinChat(id: string): void {
    store.dispatch(unPinChat({ id }))
  }

  public static singleChatObserver(chat: SingleChatType): void {
    if (!chat.lastMessage) {
      return
    }

    if (chat.lastMessage.user === 'currentUser') {
      const randomQuote = UserService.randomQuote(chat.member)
      this.insertMessageIntoChat(randomQuote, chat.id, chat.member)
    }
  }

  public static groupChatObserver(chat: GroupChatType): void {
    const randomMember = ArrayUtils.randomItem(chat.members)
    const randomQuote = UserService.randomQuote(randomMember)
    this.insertMessageIntoChat(randomQuote, chat.id, randomMember)
  }

  private static sortFunction(
    chatA: SingleChatType | GroupChatType,
    chatB: SingleChatType | GroupChatType
  ): number {
    if (chatA?.pinned) {
      return -1
    }

    if (chatB?.pinned) {
      return 1
    }

    if (chatA?.lastMessage && chatB?.lastMessage) {
      return DateUtils.orderDates(
        chatA?.lastMessage?.dtSend || '',
        chatB?.lastMessage?.dtSend || ''
      )
    }

    return 0
  }

  private static currentUserMessage(content: string): MessageType {
    return {
      content,
      dtSend: new Date(),
      user: 'currentUser'
    }
  }

  private static singleChatExistis(member: string): string {
    const storeData = store.getState()

    for (const chat in storeData.chats.userChats) {
      if (storeData.chats.userChats[chat].member === member) {
        return storeData.chats.userChats[chat].id
      }
    }

    return ''
  }
}
