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
  position: {
    top: number
    left: number
  }
}

const ChatOptions = ({ closeModal, chatId, position }: ChatOptionsProps) => {
  const handleRemoveChat = () => {
    ChatService.removeChat(chatId)
  }

  const handlePinChat = () => {}

  const handleUnPinChat = () => {}

  const stopClickPropagation = (e: MouseEvent) => {
    if (e) {
      e.stopPropagation()
      e.stopPropagation()
    }
  }

  return (
    <Modal onClickOutside={() => closeModal()}>
      <S.Wrapper onClick={stopClickPropagation} position={position}>
        <S.Option onClick={handlePinChat}>
          <PinIcon />
          <p>Pin Chat</p>
        </S.Option>
        <S.Option onClick={handleUnPinChat}>
          <UnpinIcon />
          <p>UnPin Chat</p>
        </S.Option>
        <S.Option className="danger" onClick={handleRemoveChat}>
          <DeleteOutlineIcon />
          <p>Delete Chat</p>
        </S.Option>
      </S.Wrapper>
    </Modal>
  )
}
export default ChatOptions
