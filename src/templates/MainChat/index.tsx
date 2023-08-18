import * as S from './styles'
import MessageInput from '@/components/MessageInput'
import ChatBody from '@/components/ChatBody'
import { ChatService } from '@/services/ChatService'
import { TypeUtils } from '@/utils/TypeUtils'
import SingleChatHeader from '@/components/SingleChatHeader'

type MainChatProps = {
  chatId: string
}

const MainChat = ({ chatId = 'batata' }: MainChatProps) => {
  const chat = ChatService.getChatById(chatId)

  if (!chat) {
    return <></>
  }

  return (
    <S.Wrapper>
      {TypeUtils.isSingleChatType(chat) ? (
        <SingleChatHeader chat={chat} />
      ) : (
        <></>
      )}
      <ChatBody />
      <MessageInput />
    </S.Wrapper>
  )
}
export default MainChat
