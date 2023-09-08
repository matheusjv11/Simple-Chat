import { useSelector } from 'react-redux'
import { store } from '@/store'
import { RootState } from '@/store'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import { DateUtils } from '@/utils/DateUtils'
import { TypeUtils } from '@/utils/TypeUtils'
import moment from 'moment'
import { addMessageIntoChat } from '@/store/reducers/chatsReducer'
import { UserService } from './UserService'
import { ExistingCharacters } from '@/database/Characters'

export class ChatService {
  /**
   * Orders a given list of chats by its last message's sent date
   *
   * @param chats Given list of chats
   * @returns Ordered list of chats
   */
  public static orderChats(chats: (SingleChatType | GroupChatType)[]) {
    return [...chats].sort((a, b) => {
      return DateUtils.orderDates(
        a.lastMessage?.dtSend || '',
        b.lastMessage?.dtSend || ''
      )
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
          dtSend: moment().format(),
          user
        }
      })
    )
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

  public static startGroupChatMessaging(chat: GroupChatType): void {
    if (TypeUtils.isSingleChatType(chat)) {
      return
    }
  }
}
