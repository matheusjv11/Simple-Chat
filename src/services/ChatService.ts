import { useSelector } from 'react-redux'
import { store } from '@/store'
import { RootState } from '@/store'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import { DateUtils } from '@/utils/DateUtils'
import {
  addMessageIntoChat,
  removeChat,
  pinChat,
  unPinChat
} from '@/store/reducers/chatsReducer'
import { UserService } from './UserService'
import { Characters, ExistingCharacters } from '@/database/Characters'
import { ArrayUtils } from '@/utils/ArrayUtils'
import { TypeUtils } from '@/utils/TypeUtils'

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
    const chats = useSelector((state: RootState) => state.chats.userChats)

    return chats[id]
  }

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
      setTimeout(() => {
        this.insertMessageIntoChat(randomQuote, chat.id, chat.member)
      }, 1500)
    }
  }

  public static groupChatObserver(chat: GroupChatType): void {
    const randomMember = ArrayUtils.randomItem(chat.members)
    const randomQuote = UserService.randomQuote(randomMember)
    this.insertMessageIntoChat(randomQuote, chat.id, randomMember)
  }
}
