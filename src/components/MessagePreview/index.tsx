import ProfilePicture from '../ProfilePicture'
import AryaImage from '../../../public/img/profiles/arya.png'
import * as S from './styles'

import { Username } from '../MessageBox/styles'
import { SingleChatType } from '@/types/SingleChatType'
import { GroupChatType } from '@/types/GroupChatType'
import { TypeUtils } from '@/utils/TypeUtils'
import GroupPicture from '../GroupPicture'

type MessagePreviewProps = {
  chat: SingleChatType | GroupChatType
}

const MessagePreview = ({ chat }: MessagePreviewProps) => {
  const isSingleChat = TypeUtils.isSingleChatType(chat)
  const chatName = isSingleChat ? chat.lastMessage?.user

  return (
    <S.Wrapper>
      {isSingleChat ? (
        <ProfilePicture userKey={chat.member} size="normal" />
      ) : (
        <GroupPicture />
      )}

      <S.MessageContent>
        <S.FlexColumn>
          <Username>Arya Stark</Username>
          <p>{chat.lastMessage?.content}</p>
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
