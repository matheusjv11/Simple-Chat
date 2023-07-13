import ProfilePicture from '../ProfilePicture'
import AryaImage from '../../../public/img/profiles/arya.png'
import * as S from './styles'

import { Username } from '../MessageBox/styles'

const MessagePreview = () => (
  <S.Wrapper>
    <ProfilePicture
      profile={AryaImage.src}
      online={false}
      profileAlt="Arya`s profile"
      size="normal"
    />
    <S.MessageContent>
      <S.FlexColumn>
        <Username>Arya Stark</Username>
        <p>Message itself</p>
      </S.FlexColumn>
      <S.FlexColumn>
        <p>1h</p>
        <p>vv</p>
      </S.FlexColumn>
    </S.MessageContent>
  </S.Wrapper>
)
export default MessagePreview
