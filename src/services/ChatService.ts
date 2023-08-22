import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import moment from 'moment'
import { DateUtils } from '@/utils/DateUtils'

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

    return chats.find((chat) => chat.id === id)
  }
}
