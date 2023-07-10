import ProfilePicture from '../ProfilePicture'
import * as S from './styles'
import AryaImage from '../../../public/img/profiles/arya.png'

export type MessageBoxProps = {
  message: string
  currentUser: boolean
}

const MessageBox = ({ message, currentUser }: MessageBoxProps) => (
  <S.Wrapper isCurrentUser={false}>
    <ProfilePicture
      profile={AryaImage.src}
      online={false}
      profileAlt="Arya`s profile"
    />
    <S.MessageCard>
      <S.Title>Matheus</S.Title>
      <S.Box>{message}</S.Box>
      <S.SentHour>21:14</S.SentHour>
    </S.MessageCard>
  </S.Wrapper>
)
export default MessageBox
