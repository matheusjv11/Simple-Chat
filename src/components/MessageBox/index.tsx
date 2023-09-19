import ProfilePicture from '../ProfilePicture'
import * as S from './styles'
import { MessageType } from '@/types/MessageType'
import { UserService } from '@/services/UserService'
import { UserType } from '@/types/UserType'
import { DateUtils } from '@/utils/DateUtils'

export type MessageBoxProps = {
  message: MessageType
}

const MessageBox = ({ message }: MessageBoxProps) => {
  const date = new DateUtils(message.dtSend).getHoursAndMinutes()
  let user: UserType | undefined

  if (message.user !== 'currentUser') {
    user = UserService.getUser(message.user)
  }

  return (
    <S.Wrapper isCurrentUser={!user}>
      {user && (
        <ProfilePicture
          profile={user?.profile || ''}
          profileAlt={`${user?.name}'s profile`}
          size="small"
        />
      )}

      <S.MessageCard isCurrentUser={!user}>
        {!!user && (
          <S.Username nameColor={user?.color}>{user?.name}</S.Username>
        )}
        <S.Box>{message.content}</S.Box>
        <S.SentHour>{date}</S.SentHour>
      </S.MessageCard>
    </S.Wrapper>
  )
}
export default MessageBox
