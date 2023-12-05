import * as S from './styles'

type GroupPictureProps = {
  membersProfile: string[]
  large?: boolean
}

const GroupPicture = ({
  membersProfile = [],
  large = false
}: GroupPictureProps) => (
  <S.Wrapper imagesize={membersProfile.length} large={large}>
    {membersProfile.slice(0, 4).map((profile, i) => {
      return (
        <S.GroupImageSlice
          src={profile}
          imagesize={membersProfile.length}
          currentindex={i}
          key={i}
          alt="Character illustrative image"
        />
      )
    })}
  </S.Wrapper>
)
export default GroupPicture
