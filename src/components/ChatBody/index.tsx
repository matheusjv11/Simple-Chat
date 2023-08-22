import { MessageType } from '@/types/MessageType'
import * as S from './styles'
import MessageBox from '../MessageBox'

type ChatBodyType = {
  messages: MessageType[]
}

const ChatBody = ({ messages }: ChatBodyType) => {
  return (
    <S.Wrapper>
      {messages.map((message) => {
        return <MessageBox message={message} />
      })}
    </S.Wrapper>
  )
}

export default ChatBody
