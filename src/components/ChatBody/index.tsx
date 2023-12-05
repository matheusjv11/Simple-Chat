import { useEffect, useRef } from 'react'
import { MessageType } from '@/types/MessageType'
import * as S from './styles'
import MessageBox from '../MessageBox'

type ChatBodyType = {
  messages: MessageType[]
}

const ChatBody = ({ messages }: ChatBodyType) => {
  const chatBodyAsHtml = useRef<HTMLDivElement | null>(null)
  const messageListAsHtml = useRef<HTMLDivElement | null>(null)

  const scrollBottom = () => {
    if (messageListAsHtml.current) {
      const newMessage = messageListAsHtml.current?.lastElementChild
      const elementPositioning =
        messageListAsHtml.current.getBoundingClientRect()

      if (elementPositioning.width > 750) {
        newMessage?.scrollIntoView({
          inline: 'nearest',
          block: 'end',
          behavior: 'smooth'
        })
      }
    }
  }

  const userIsOnBottom = (): boolean => {
    if (chatBodyAsHtml.current) {
      const howMuchUserScrolled =
        chatBodyAsHtml.current.scrollTop + chatBodyAsHtml.current.clientHeight

      return chatBodyAsHtml.current.scrollHeight - howMuchUserScrolled < 150
    }

    return false
  }

  useEffect(() => {
    if (userIsOnBottom()) {
      scrollBottom()
    }
  }, [messages])

  return (
    <S.Wrapper ref={chatBodyAsHtml} className="custom-scroll">
      <S.MessageList ref={messageListAsHtml}>
        {messages.map((message, i) => {
          return <MessageBox message={message} key={i} />
        })}
      </S.MessageList>
    </S.Wrapper>
  )
}

export default ChatBody
