import * as S from './styles'
import ChatHeader from '@/components/ChatHeader'
import { SingleChatType } from '@/types/SingleChatType'
import ProfilePicture from '../ProfilePicture'
import { UserService } from '@/services/UserService'
import { DateUtils } from '@/utils/DateUtils'

type SingleChatHeaderProps = {
  chat: SingleChatType
}

const SingleChatHeader = ({ chat }: SingleChatHeaderProps) => {
  const user = UserService.getUser(chat.member)
  const isOnline = new DateUtils(
    chat.lastMessage?.dtSend || ''
  ).lessThanFiveMinutesAgo()

  return (
    <ChatHeader
      chatName={user.name}
      additionalInfo={isOnline ? 'Online' : 'Offline'}
    >
      <ProfilePicture
        profile={user.profile}
        profileAlt={`${user.name}'s profile picure`}
        online={isOnline}
      />
    </ChatHeader>
  )
}
export default SingleChatHeader
