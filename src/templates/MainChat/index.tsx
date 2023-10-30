import { useEffect, useState, createContext, useContext } from 'react'
import * as S from './styles'
import MessageInput from '@/components/MessageInput'
import ChatBody from '@/components/ChatBody'
import { MobileChatOpenContext } from '@/templates/Home'
import { ChatService } from '@/services/ChatService'
import { TypeUtils } from '@/utils/TypeUtils'
import SingleChatHeader from '@/components/SingleChatHeader'
import GroupChatHeader from '@/components/GroupChatHeader'
import { store } from '@/store'
import { cleanUnreadMessages } from '@/store/reducers/chatsReducer'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import SingleChatDescription from './components/SingleChatDescription'
import GroupChatDescription from './components/GroupChatDescription'

export const DescriptionOpenContext = createContext({
  isDescriptionOpen: false,
  updateContextValue: () => {}
})

type MainChatProps = {
  chat: SingleChatType | GroupChatType
}

const MainChat = ({ chat }: MainChatProps) => {
  store.dispatch(cleanUnreadMessages({ id: chat.id }))

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
    } else {
      setTimeout(() => {
        ChatService.groupChatObserver(chat)
      }, 3500)
    }
  }, [chat.messages])

  return (
    <S.Wrapper isOpen={isMobileChatOpen}>
      <DescriptionOpenContext.Provider
        value={{ isDescriptionOpen, updateContextValue }}
      >
        <S.ChatWrapper isDescriptionOpen={isDescriptionOpen}>
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
