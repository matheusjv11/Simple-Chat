import * as S from './styles'
import { DateUtils } from '@/utils/DateUtils'

export type ProfilePictureProps = {
  profile: string
  profileAlt: string
  size?: 'small' | 'normal' | 'large'
  lastMessageDate?: Date
}

const ProfilePicture = ({
  profile,
  profileAlt,
  size = 'normal',
  lastMessageDate
}: ProfilePictureProps) => {
  const isOnline =
    lastMessageDate && new DateUtils(lastMessageDate).lessThanFiveMinutesAgo()

  return (
    <S.Wrapper
      profile={profile}
      title={profileAlt}
      aria-label={profileAlt}
      size={size}
    >
      {isOnline && <S.OnlineStatus />}
    </S.Wrapper>
  )
}

export default ProfilePicture
