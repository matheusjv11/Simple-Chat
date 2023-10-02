import {
  useEffect,
  useState,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler
} from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'

import { Username } from '../MessageBox/styles'
import { MessageType } from '@/types/MessageType'
import { DateUtils } from '@/utils/DateUtils'
import ChatOptions from '../ChatOptions'
import { ThreeDotsVertical as ThreeDotsVerticalIcon } from '@styled-icons/bootstrap/ThreeDotsVertical'

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
  const [optionsPosition, setOptionsPosition] = useState({
    top: 158.41250610351562,
    left: 71
  })
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

  const openOptions = (
    open: boolean,
    topPosition: number,
    leftPosition: number
  ) => {
    setOptionsPosition(() => {
      return { top: topPosition, left: leftPosition }
    })
    setOptionsIsOpen(open)
  }

  const handleOptionsClick = (
    e: MouseEventHandler<HTMLButtonElement> | undefined
  ) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
      const { top, left, right, bottom } = e.target.getBoundingClientRect()
      openOptions(true, top, left)
    }
  }

  return (
    <S.Wrapper selectedChat={selectedChat} tabIndex={0}>
      {children}
      <S.MessageContent>
        <S.FlexColumn>
          <Username>{name}</Username>
          <S.Message>{lastMessage?.content}</S.Message>
        </S.FlexColumn>
        <S.RightSide>
          <S.FlexColumn end={true}>
            <S.SentDate>{date}</S.SentDate>
            {!!countUnreadMessage && (
              <S.UnreadMessage>{countUnreadMessage}</S.UnreadMessage>
            )}
          </S.FlexColumn>
          <S.FlexColumn>
            <S.Button onClick={handleOptionsClick}>
              <ThreeDotsVerticalIcon />
            </S.Button>
          </S.FlexColumn>
        </S.RightSide>
      </S.MessageContent>
      {optionsIsOpen && (
        <ChatOptions openState={setOptionsIsOpen} position={optionsPosition} />
      )}
    </S.Wrapper>
  )
}
export default MessagePreview
