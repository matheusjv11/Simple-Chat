import * as S from './styles'

import { Username } from '../MessageBox/styles'
import { MessageType } from '@/types/MessageType'
import { DateUtils } from '@/utils/DateUtils'

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
  const date = new DateUtils(lastMessage?.dtSend || '').chatPreviewDate()

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
          <p>vv</p>
        </S.FlexColumn>
      </S.MessageContent>
    </S.Wrapper>
  )
}
export default MessagePreview
