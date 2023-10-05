'use client'
import Modal from '../Modal'
import { DeleteOutline as DeleteOutlineIcon } from '@styled-icons/material-rounded/DeleteOutline'
import { PinAngle as PinIcon } from '@styled-icons/bootstrap/PinAngle'
import { PinOff as UnpinIcon } from '@styled-icons/fluentui-system-regular/PinOff'

import * as S from './styles'
import { ChatService } from '@/services/ChatService'

export type ChatOptionsProps = {
  closeModal: () => void
  chatId: string
  isChatPinned: boolean
  position: {
    top: number
    left: number
  }
}

const ChatOptions = ({
  closeModal,
  isChatPinned,
  chatId,
  position
}: ChatOptionsProps) => {
  const handleRemoveChat = () => {
    ChatService.removeChat(chatId)
  }

  const handlePinChat = () => {
    ChatService.pinChat(chatId)
    closeModal()
  }

  const handleUnPinChat = () => {
    ChatService.unPinChat(chatId)
    closeModal()
  }

  const stopClickPropagation = (e: MouseEvent) => {
    if (e) {
      e.stopPropagation()
      e.stopPropagation()
    }
  }

  return (
    <Modal onClickOutside={closeModal}>
      <S.Wrapper onClick={stopClickPropagation} position={position}>
        {isChatPinned ? (
          <S.Option onClick={handleUnPinChat}>
            <UnpinIcon />
            <p>UnPin Chat</p>
          </S.Option>
        ) : (
          <S.Option onClick={handlePinChat}>
            <PinIcon />
            <p>Pin Chat</p>
          </S.Option>
        )}
        <S.Option className="danger" onClick={handleRemoveChat}>
          <DeleteOutlineIcon />
          <p>Delete Chat</p>
        </S.Option>
      </S.Wrapper>
    </Modal>
  )
}
export default ChatOptions
