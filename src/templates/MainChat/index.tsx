import { useEffect, useState, createContext, useContext } from 'react'
import * as S from './styles'
import MessageInput from '@/components/MessageInput'
import ChatBody from '@/components/ChatBody'
import { MobileChatOpenContext } from '@/templates/Home'
import { ChatService } from '@/services/ChatService'
import { TypeUtils } from '@/utils/TypeUtils'
import SingleChatHeader from '@/components/SingleChatHeader'
import GroupChatHeader from '@/components/GroupChatHeader'
import { RootState, store } from '@/store'
import { cleanUnreadMessages } from '@/store/reducers/chatsReducer'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import SingleChatDescription from './components/SingleChatDescription'
import GroupChatDescription from './components/GroupChatDescription'
import { useRouter } from 'next/router'
import { shallowEqual, useSelector } from 'react-redux'

export const DescriptionOpenContext = createContext({
  isDescriptionOpen: false,
  updateContextValue: () => {}
})

type MainChatProps = {
  chatId: string
}

const MainChat = ({ chatId }: MainChatProps) => {
  const router = useRouter()

  const chat = useSelector(
    (state: RootState) => state.chats.userChats[chatId],
    shallowEqual
  )

  store.dispatch(cleanUnreadMessages({ id: chatId }))

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

  const { isMobileChatOpen } = useContext(MobileChatOpenContext)

  const updateContextValue = () => {
    setIsDescriptionOpen(!isDescriptionOpen)
  }

  const isSingleChatType = TypeUtils.isSingleChatType(chat)

  useEffect(() => {
    if (isSingleChatType) {
      setTimeout(() => {
        ChatService.singleChatObserver(chat)
      }, 1500)
    }
  }, [chat?.lastMessage])

  useEffect(() => {
    setIsDescriptionOpen(false)

    let intervalId: NodeJS.Timer | number = 0

    if (!isSingleChatType) {
      intervalId = setInterval(() => {
        ChatService.groupChatObserver(chat)
      }, 3000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [router])

  return (
    <S.Wrapper isOpen={isMobileChatOpen} className="background-fancy-image">
      <DescriptionOpenContext.Provider
        value={{ isDescriptionOpen, updateContextValue }}
      >
        <S.ChatWrapper isDescriptionOpen={Number(isDescriptionOpen)}>
          {isSingleChatType ? (
            <SingleChatHeader chat={chat} />
          ) : (
            <GroupChatHeader chat={chat} />
          )}
          <ChatBody messages={chat.messages} />
          <MessageInput />
        </S.ChatWrapper>
        {isSingleChatType ? (
          <SingleChatDescription chat={chat} />
        ) : (
          <GroupChatDescription chat={chat} />
        )}
      </DescriptionOpenContext.Provider>
    </S.Wrapper>
  )
}
export default MainChat
