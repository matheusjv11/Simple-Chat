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
      chatBodyAsHtml.current.scrollTop = chatBodyAsHtml.current.scrollHeight
    }
  }, [messages])

  return (
    <S.Wrapper ref={chatBodyAsHtml} className="custom-scroll">
      {messages.map((message) => {
        return <MessageBox message={message} />
      })}
    </S.Wrapper>
  )
}

export default ChatBody
