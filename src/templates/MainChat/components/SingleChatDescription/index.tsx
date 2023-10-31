import * as S from './styles'
import ProfilePicture from '@/components/ProfilePicture'
import { UserService } from '@/services/UserService'
import { SingleChatType } from '@/types/SingleChatType'
import ChatDescription from '../ChatDescription'

type SingleChatDescriptionProps = {
  chat: SingleChatType
}

const SingleChatDescription = ({ chat }: SingleChatDescriptionProps) => {
  const user = UserService.getUser(chat.member)
  const house = UserService.getHouseDescription(user.house || '')

  return (
    <ChatDescription
      coverPicture={
        <ProfilePicture
          profile={user.banner}
          profileAlt={`${user.name}'s profile picure`}
          size="large"
        />
      }
      chatId={chat.id}
      title={user.name}
      subtitle={house}
      pinned={chat.pinned}
    ></ChatDescription>
  )
}

export default SingleChatDescription
