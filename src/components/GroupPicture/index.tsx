import * as S from './styles'

type GroupPictureProps = {
  membersProfile: string[]
}

const GroupPicture = ({ membersProfile = [] }: GroupPictureProps) => (
  <S.Wrapper imageSize={membersProfile.length}>
    {membersProfile.map((profile, i) => {
      return (
        <S.GroupImageSlice
          src={profile}
          imageSize={membersProfile.length}
          currentIndex={i}
        />
      )
    })}
  </S.Wrapper>
)
export default GroupPicture
