import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'

export class ChatService {
  public static orderChats(chats: (SingleChatType | GroupChatType)[]) {
    // Order chats by the last message sent

    return chats
  }

  public static getChatById(id: string): SingleChatType | GroupChatType | undefined {
    const chats = useSelector((state: RootState) => state.chats.userChats)

    return chats.find((chat) => chat.id === id)
  }
}
