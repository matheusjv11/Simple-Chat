import * as S from './styles'

export type MessageBoxProps = {
  message: string
  currentUser: boolean
}

const MessageBox = ({ message, currentUser }: MessageBoxProps) => (
  <S.Wrapper currentUser={currentUser}>{message}</S.Wrapper>
)
export default MessageBox
