import * as S from './styles'

export type ProfilePictureProps = {
  profile: string
  profileAlt: string
  online: boolean
  size?: 'small' | 'normal'
}

const ProfilePicture = ({
  profile,
  online,
  profileAlt,
  size = 'normal'
}: ProfilePictureProps) => (
  <S.Wrapper
    profile={profile}
    title={profileAlt}
    aria-label={profileAlt}
    size={size}
  >
    {online && <S.OnlineStatus />}
  </S.Wrapper>
)

export default ProfilePicture
