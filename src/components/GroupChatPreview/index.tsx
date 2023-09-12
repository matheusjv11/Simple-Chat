import { GroupChatType } from '@/types/GroupChatType'
import * as S from './styles'
import MessagePreview from '../MessagePreview'
import { UserService } from '@/services/UserService'
import GroupPicture from '../GroupPicture'

type GroupChatPreviewProps = {
  chat: GroupChatType
}

const GroupChatPreview = ({ chat }: GroupChatPreviewProps) => {
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
