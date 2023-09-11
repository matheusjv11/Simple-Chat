import { useEffect } from 'react'
import * as S from './styles'
import MessageInput from '@/components/MessageInput'
import ChatBody from '@/components/ChatBody'
import { ChatService } from '@/services/ChatService'
import { TypeUtils } from '@/utils/TypeUtils'
import SingleChatHeader from '@/components/SingleChatHeader'
import GroupChatHeader from '@/components/GroupChatHeader'
import { store } from '@/store'
import { cleanUnreadMessages } from '@/store/reducers/chatsReducer'

type MainChatProps = {
  chatId: string
}

const MainChat = ({ chatId }: MainChatProps) => {
  const chat = ChatService.getChatById(chatId)

  if (!chat) {
    return <></>
  }

  store.dispatch(cleanUnreadMessages({ id: chatId }))

  const isSingleChatType = TypeUtils.isSingleChatType(chat)

  useEffect(() => {
    if (isSingleChatType) {
      ChatService.singleChatObserver(chat)
    }
  }, [chat.messages])

  useEffect(() => {
    let intervalId: any

    if (!isSingleChatType) {
      intervalId = setInterval(() => {
        ChatService.groupChatObserver(chat)
      }, 3500)
    }

    return () => clearInterval(intervalId)
  }, [])

  return (
    <S.Wrapper>
      {isSingleChatType ? (
        <SingleChatHeader chat={chat} />
      ) : (
        <GroupChatHeader chat={chat} />
      )}
      <ChatBody messages={chat.messages} />
      <MessageInput />
    </S.Wrapper>
  )
}
export default MainChat
