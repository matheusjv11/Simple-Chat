import Modal from '../Modal'
import { DeleteOutline as DeleteOutlineIcon } from '@styled-icons/material-rounded/DeleteOutline'
import { PinAngle as PinIcon } from '@styled-icons/bootstrap/PinAngle'
import { PinOff as UnpinIcon } from '@styled-icons/fluentui-system-regular/PinOff'

import * as S from './styles'

const ChatOptions = () => {
  const handleDeleteChat = () => {}

  const handlePinChat = () => {}

  const handleUnPinChat = () => {}

  return (
    <Modal>
      <S.Wrapper>
        <S.Option>
          <PinIcon />
          <p>Pin Chat</p>
        </S.Option>
        <S.Option>
          <UnpinIcon />
          <p>UnPin Chat</p>
        </S.Option>
        <S.Option className="danger">
          <DeleteOutlineIcon />
          <p>Delete Chat</p>
        </S.Option>
      </S.Wrapper>
    </Modal>
  )
}
export default ChatOptions
