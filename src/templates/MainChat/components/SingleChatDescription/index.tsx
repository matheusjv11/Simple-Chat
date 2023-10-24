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

  return (
    <ChatDescription
      coverPicture={
        <ProfilePicture
          profile={user.profile}
          profileAlt={`${user.name}'s profile picure`}
          size="large"
        />
      }
    ></ChatDescription>
  )
}

export default SingleChatDescription
