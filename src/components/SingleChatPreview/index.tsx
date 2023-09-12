import { SingleChatType } from '@/types/SingleChatType'
import * as S from './styles'
import MessagePreview from '../MessagePreview'
import { UserService } from '@/services/UserService'
import ProfilePicture from '../ProfilePicture'

type SingleChatPreviewProps = {
  chat: SingleChatType
}

const SingleChatPreview = ({ chat }: SingleChatPreviewProps) => {
  const user = UserService.getUser(chat.member)

  return (
    <S.Wrapper>
      <MessagePreview
        name={user.name}
        chatId={chat.id}
        lastMessage={chat.lastMessage}
        unreadMessages={chat.unreadMessages}
      >
        <ProfilePicture
          profile={user.profile}
          profileAlt={`${user.name}'s profile picure`}
        />
      </MessagePreview>
    </S.Wrapper>
  )
}

export default SingleChatPreview
