import { useSelector } from 'react-redux'
import { store } from '@/store'
import { RootState } from '@/store'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import { DateUtils } from '@/utils/DateUtils'
import moment from 'moment'
import { addMessageIntoChat } from '@/store/reducers/chatsReducer'

export class ChatService {
  public static orderChats(chats: (SingleChatType | GroupChatType)[]) {
    return [...chats].sort((a, b) => {
      return DateUtils.orderDates(
        a.lastMessage?.dtSend || '',
        b.lastMessage?.dtSend || ''
      )
    })
  }

  public static getChatById(
    id: string
  ): SingleChatType | GroupChatType | undefined {
    const chats = useSelector((state: RootState) => state.chats.userChats)

    return chats[id]
  }

  public static insertMessageIntoChat(content: string, chatId: string): void {
    store.dispatch(
      addMessageIntoChat({
        id: chatId,
        message: {
          content: content,
          dtSend: moment().format(),
          user: 'currentUser'
        }
      })
    )
  }
}
