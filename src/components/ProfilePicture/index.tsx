import { ExistingCharacters } from '@/database/Characters'
import * as S from './styles'
import { UserService } from '@/services/UserService'

export type ProfilePictureProps = {
  userKey: ExistingCharacters
  size?: 'small' | 'normal'
}

const ProfilePicture = ({ userKey, size = 'normal' }: ProfilePictureProps) => {
  const user = UserService.getUser(userKey)
  const profileAlt = `'s profile image`

  return (
    <S.Wrapper
      profile={user.profile}
      title={profileAlt}
      aria-label={profileAlt}
      size={size}
    >
      {/* online */ false && <S.OnlineStatus />}
    </S.Wrapper>
  )
}

export default ProfilePicture
