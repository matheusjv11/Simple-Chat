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

export class ChatService {
  /**
   * Orders a given list of chats by its last message's sent date
   *
   * @param chats Given list of chats
   * @returns Ordered list of chats
   */
  public static orderChats(chats: (SingleChatType | GroupChatType)[]) {
    return [...chats].sort((a, b) => {
      if (a.pinned) {
        return -1
      }

      if (a.lastMessage && b.lastMessage) {
        return DateUtils.orderDates(
          a.lastMessage?.dtSend || '',
          b.lastMessage?.dtSend || ''
        )
      }

      return 0
    })
  }

  /**
   * Given a target string, searches for compatible chats
   *
   * @param chats Given list of chats
   * @param filter String the chat must contain in its name
   * @returns Filtered list of chats
   */
  public static filterChats(
    chats: (SingleChatType | GroupChatType)[],
    filter: string
  ) {
    return [...chats].filter((chat) => {
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
