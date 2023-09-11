import { useEffect, useState } from 'react'
import * as S from './styles'

import { Username } from '../MessageBox/styles'
import { MessageType } from '@/types/MessageType'
import { DateUtils } from '@/utils/DateUtils'

type MessagePreviewProps = {
  name: string
  lastMessage?: MessageType
  children: React.ReactNode
  unreadMessages: number
}

const MessagePreview = ({
  name,
  lastMessage,
  children,
  unreadMessages
}: MessagePreviewProps) => {
  const date = new DateUtils(lastMessage?.dtSend || '').chatPreviewDate()
  const [countUnreadMessage, setCountUnreadMessage] =
    useState<number>(unreadMessages)

  useEffect(() => {
    setCountUnreadMessage(unreadMessages)
  }, [unreadMessages])

  return (
    <S.Wrapper>
      {children}
      <S.MessageContent>
        <S.FlexColumn>
          <Username>{name}</Username>
          <p>{lastMessage?.content}</p>
        </S.FlexColumn>
        <S.FlexColumn end={true}>
          <p>{date}</p>
          {!!countUnreadMessage && <p>{countUnreadMessage}</p>}
        </S.FlexColumn>
      </S.MessageContent>
    </S.Wrapper>
  )
}
export default MessagePreview
