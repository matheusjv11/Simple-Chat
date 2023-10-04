import * as S from './styles'

type GroupPictureProps = {
  membersProfile: string[]
}

const GroupPicture = ({ membersProfile = [] }: GroupPictureProps) => (
  <S.Wrapper imagesize={membersProfile.length}>
    {membersProfile.map((profile, i) => {
      return (
        <S.GroupImageSlice
          src={profile}
          imagesize={membersProfile.length}
          currentindex={i}
          key={i}
        />
      )
    })}
  </S.Wrapper>
)
export default GroupPicture
