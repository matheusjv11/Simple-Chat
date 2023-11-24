import { GroupChatType } from '@/types/GroupChatType'
import * as S from './styles'
import MessagePreview from '../MessagePreview'
import { UserService } from '@/services/UserService'
import GroupPicture from '../GroupPicture'
import { ChatService } from '@/services/ChatService'

type GroupChatPreviewProps = {
  chatId: string
}

const GroupChatPreview = ({ chatId }: GroupChatPreviewProps) => {
  const chat = ChatService.getChatById(chatId) as GroupChatType

  const membersProfile = chat.members.map((member) => {
    return UserService.getUser(member).profile
  })

  return (
    <S.Wrapper>
      <MessagePreview
        name={chat.name}
        chatId={chat.id}
        lastMessage={chat.lastMessage}
        unreadMessages={chat.unreadMessages}
      >
        <GroupPicture membersProfile={membersProfile} />
      </MessagePreview>
    </S.Wrapper>
  )
}

export default GroupChatPreview
