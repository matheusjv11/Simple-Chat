import * as S from './styles'
import GroupPicture from '@/components/GroupPicture'
import { UserService } from '@/services/UserService'
import { GroupChatType } from '@/types/GroupChatType'
import ChatDescription from '../ChatDescription'

type GroupChatDescriptionProps = {
  chat: GroupChatType
}

const GroupChatDescription = ({ chat }: GroupChatDescriptionProps) => {
  const membersProfile = chat.members.map((member) => {
    return UserService.getUser(member).profile
  })

  return (
    <ChatDescription
      coverPicture={
        <GroupPicture membersProfile={membersProfile} large={true} />
      }
    ></ChatDescription>
  )
}

export default GroupChatDescription
