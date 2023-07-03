import * as S from './styles'

type GroupPictureProps = {
  membersProfile: string[]
}

const GroupPicture = ({ membersProfile }: GroupPictureProps) => (
  <S.Wrapper>
    {membersProfile.map((profile) => {
      return <img src={profile} />
    })}
  </S.Wrapper>
)
export default GroupPicture
