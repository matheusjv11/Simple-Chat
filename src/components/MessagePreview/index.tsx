import * as S from './styles'

import { Username } from '../MessageBox/styles'
import { MessageType } from '@/types/MessageType'

type MessagePreviewProps = {
  name: string
  lastMessage?: MessageType
  children: React.ReactNode
}

const MessagePreview = ({
  name,
  lastMessage,
  children
}: MessagePreviewProps) => {
  return (
    <S.Wrapper>
      {children}
      <S.MessageContent>
        <S.FlexColumn>
          <Username>{name}</Username>
          <p>{lastMessage?.content}</p>
        </S.FlexColumn>
        <S.FlexColumn>
          <p>1h</p>
          <p>vv</p>
        </S.FlexColumn>
      </S.MessageContent>
    </S.Wrapper>
  )
}
export default MessagePreview
