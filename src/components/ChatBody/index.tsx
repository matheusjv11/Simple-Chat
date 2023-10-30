import { useEffect, useRef } from 'react'
import { MessageType } from '@/types/MessageType'
import * as S from './styles'
import MessageBox from '../MessageBox'

type ChatBodyType = {
  messages: MessageType[]
}

const ChatBody = ({ messages }: ChatBodyType) => {
  const chatBodyAsHtml = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chatBodyAsHtml.current) {
      if (
        chatBodyAsHtml.current.scrollTop + chatBodyAsHtml.current.offsetHeight >
        chatBodyAsHtml.current.scrollHeight
      ) {
        chatBodyAsHtml.current.scrollTop = chatBodyAsHtml.current.scrollHeight
      }
    }
  }, [messages])

  return (
    <S.Wrapper ref={chatBodyAsHtml} className="custom-scroll">
      <S.MessageList>
        {messages.map((message, i) => {
          return <MessageBox message={message} key={i} />
        })}
      </S.MessageList>
    </S.Wrapper>
  )
}

export default ChatBody
