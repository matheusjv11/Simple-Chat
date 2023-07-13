import ProfilePicture from '../ProfilePicture'
import * as S from './styles'
import AryaImage from '../../../public/img/profiles/arya.png'

export type MessageBoxProps = {
  message: string
  isCurrentUser: boolean
}

const MessageBox = ({ message, isCurrentUser }: MessageBoxProps) => (
  <S.Wrapper isCurrentUser={isCurrentUser}>
    {!isCurrentUser && (
      <ProfilePicture
        profile={AryaImage.src}
        online={false}
        profileAlt="Arya`s profile"
        size="small"
      />
    )}

    <S.MessageCard isCurrentUser={isCurrentUser}>
      {!isCurrentUser && <S.Username>Matheus</S.Username>}
      <S.Box>{message}</S.Box>
      <S.SentHour>21:14</S.SentHour>
    </S.MessageCard>
  </S.Wrapper>
)
export default MessageBox
