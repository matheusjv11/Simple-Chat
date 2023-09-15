import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'

import { Username } from '../MessageBox/styles'
import { MessageType } from '@/types/MessageType'
import { DateUtils } from '@/utils/DateUtils'

type MessagePreviewProps = {
  name: string
  chatId: string
  lastMessage?: MessageType
  children: React.ReactNode
  unreadMessages: number
}

const MessagePreview = ({
  name,
  chatId,
  lastMessage,
  children,
  unreadMessages
}: MessagePreviewProps) => {
  const router = useRouter()

  const date =
    lastMessage && new DateUtils(lastMessage?.dtSend).chatPreviewDate()

  const [selectedChat, setSelectedChat] = useState(false)

  const [countUnreadMessage, setCountUnreadMessage] =
    useState<number>(unreadMessages)

  useEffect(() => {
    setCountUnreadMessage(unreadMessages)
  }, [unreadMessages])

  useEffect(() => {
    setSelectedChat(router.query.id === chatId)
  }, [router])

  return (
    <S.Wrapper selectedChat={selectedChat}>
      {children}
      <S.MessageContent>
        <S.FlexColumn>
          <Username>{name}</Username>
          <S.Message>{lastMessage?.content}</S.Message>
        </S.FlexColumn>
        <S.FlexColumn end={true}>
          <S.SentDate>{date}</S.SentDate>
          {!!countUnreadMessage && (
            <S.UnreadMessage>{countUnreadMessage}</S.UnreadMessage>
          )}
        </S.FlexColumn>
      </S.MessageContent>
    </S.Wrapper>
  )
}
export default MessagePreview
