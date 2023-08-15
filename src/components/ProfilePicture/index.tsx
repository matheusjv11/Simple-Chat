import { ExistingCharacters } from '@/database/Characters'
import * as S from './styles'
import { UserService } from '@/services/UserService'

export type ProfilePictureProps = {
  profile: string
  profileAlt: string
  size?: 'small' | 'normal'
}

const ProfilePicture = ({
  profile,
  profileAlt,
  size = 'normal'
}: ProfilePictureProps) => {
  return (
    <S.Wrapper
      profile={profile}
      title={profileAlt}
      aria-label={profileAlt}
      size={size}
    >
      {/* online */ false && <S.OnlineStatus />}
    </S.Wrapper>
  )
}

export default ProfilePicture
