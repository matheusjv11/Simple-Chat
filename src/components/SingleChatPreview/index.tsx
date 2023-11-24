import { SingleChatType } from '@/types/SingleChatType'
import * as S from './styles'
import MessagePreview from '../MessagePreview'
import { UserService } from '@/services/UserService'
import ProfilePicture from '../ProfilePicture'
import { ChatService } from '@/services/ChatService'

type SingleChatPreviewProps = {
  chatId: string
}

const SingleChatPreview = ({ chatId }: SingleChatPreviewProps) => {
  const chat = ChatService.getChatById(chatId) as SingleChatType
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
          lastMessageDate={chat.lastMessage?.dtSend}
        />
      </MessagePreview>
    </S.Wrapper>
  )
}

export default SingleChatPreview
