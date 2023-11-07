import { useEffect, useState, MouseEventHandler } from 'react'
import { useRouter } from 'next/router'
import { RootState } from '@/store'
import * as S from './styles'
import { useSelector, shallowEqual } from 'react-redux'
import { Username } from '../MessageBox/styles'
import { MessageType } from '@/types/MessageType'
import { DateUtils } from '@/utils/DateUtils'
import ChatOptions from '../ChatOptions'
import { ThreeDotsVertical as ThreeDotsVerticalIcon } from '@styled-icons/bootstrap/ThreeDotsVertical'
import { PinAngle as PinAngleIcon } from '@styled-icons/bootstrap/PinAngle'

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

  /** State variables */
  const [selectedChat, setSelectedChat] = useState(false)
  const [optionsIsOpen, setOptionsIsOpen] = useState(false)
  const [optionsPosition, setOptionsPosition] = useState({
    top: 0,
    left: 0
  })

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

  const [countUnreadMessage, setCountUnreadMessage] =
    useState<number>(unreadMessages)

  const date =
    lastMessage && new DateUtils(lastMessage?.dtSend).chatPreviewDate()

  /** Whether the chat is pinned or not configurations */
  const isChatPinned = useSelector(
    (state: RootState) => state.chats.userChats[chatId].pinned,
    shallowEqual
  )

  /** Hooks */
  useEffect(() => {
    setCountUnreadMessage(unreadMessages)
  }, [unreadMessages])

  useEffect(() => {
    setSelectedChat(router.query.id === chatId)
  }, [router])

  /** Method responsible for opening options modal */
  const handleOptionsClick = (
    e: MouseEventHandler<HTMLButtonElement> | undefined
  ) => {
    if (e) {
      e.preventDefault()
      const { top, left, right, bottom } = e.target.getBoundingClientRect()
      openOptions(true, top, left)
    }
  }

  return (
    <S.Wrapper selectedchat={Number(selectedChat)} tabIndex={0}>
      {children}
      <S.MessageContent>
        <S.FlexColumn>
          <Username>{name}</Username>
          <S.Message>{lastMessage?.content}</S.Message>
        </S.FlexColumn>
        <S.RightSide>
          <S.FlexColumn end={'true'}>
            <S.SentDate>{date}</S.SentDate>
            {!!countUnreadMessage && (
              <S.UnreadMessage>{countUnreadMessage}</S.UnreadMessage>
            )}
          </S.FlexColumn>
          <S.FlexColumn className="preview-buttons">
            <S.Button onClick={handleOptionsClick}>
              <ThreeDotsVerticalIcon />
            </S.Button>
            <S.Pinned>{isChatPinned && <PinAngleIcon />}</S.Pinned>
          </S.FlexColumn>
        </S.RightSide>
      </S.MessageContent>
      {optionsIsOpen && (
        <ChatOptions
          closeModal={() => setOptionsIsOpen(false)}
          chatId={chatId}
          isChatPinned={isChatPinned}
          position={optionsPosition}
        />
      )}
    </S.Wrapper>
  )
}
export default MessagePreview
