import { useEffect, useState, KeyboardEvent, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'

import { Username } from '../MessageBox/styles'
import { MessageType } from '@/types/MessageType'
import { DateUtils } from '@/utils/DateUtils'
import ChatOptions from '../ChatOptions'

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

  const [selectedChat, setSelectedChat] = useState(false)
  const [optionsIsOpen, setOptionsIsOpen] = useState(false)
  const [countUnreadMessage, setCountUnreadMessage] =
    useState<number>(unreadMessages)

  const date =
    lastMessage && new DateUtils(lastMessage?.dtSend).chatPreviewDate()

  useEffect(() => {
    setCountUnreadMessage(unreadMessages)
  }, [unreadMessages])

  useEffect(() => {
    setSelectedChat(router.query.id === chatId)
  }, [router])

  const handleContextMenu = (event: MouseEvent<HTMLDivElement> | undefined) => {
    if (event) {
      event.preventDefault()
      setOptionsIsOpen(true)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement> | undefined) => {
    if (e) {
      if (e.key == ' ' || e.code == 'Space') {
        setOptionsIsOpen(true)
      }
    }
  }

  return (
    <S.Wrapper
      selectedChat={selectedChat}
      onContextMenu={handleContextMenu}
      tabIndex={0}
      onKeyPress={handleKeyDown}
    >
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
      {optionsIsOpen && <ChatOptions />}
    </S.Wrapper>
  )
}
export default MessagePreview
