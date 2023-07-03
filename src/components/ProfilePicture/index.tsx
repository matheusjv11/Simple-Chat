import * as S from './styles'

export type ProfilePictureProps = {
  profile: string
  profileAlt: string
  online: boolean
}

const ProfilePicture = ({
  profile,
  online,
  profileAlt
}: ProfilePictureProps) => (
  <S.Wrapper profile={profile} title={profileAlt} aria-label={profileAlt}>
    {online && <S.OnlineStatus />}
  </S.Wrapper>
)

export default ProfilePicture
