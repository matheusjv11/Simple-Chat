import * as S from './styles'
import ChatHeader from '@/components/ChatHeader'
import { GroupChatType } from '@/types/GroupChatType'
import GroupPicture from '../GroupPicture'
import { UserService } from '@/services/UserService'

type GroupChatHeaderProps = {
  chat: GroupChatType
}

const GroupChatHeader = ({ chat }: GroupChatHeaderProps) => {
  const membersProfile: string[] = []

  for (const member in chat.members) {
    if (parseInt(member) === 4) break
    membersProfile.push(UserService.getUser(chat.members[member]).profile)
  }

  return (
    <ChatHeader
      chatName={chat.name}
      additionalInfo={`${chat.members.length} members`}
    >
      <GroupPicture membersProfile={membersProfile} />
    </ChatHeader>
  )
}
export default GroupChatHeader
