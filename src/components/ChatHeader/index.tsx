import * as S from './styles'

type ChatHeaderProps = {
  children: React.ReactNode
  additionalInfo: string
  chatName: string
}

const ChatHeader = ({
  children,
  additionalInfo,
  chatName
}: ChatHeaderProps) => (
  <S.Wrapper>
    <S.InformationWrapper>
      {children}
      <div>
        <h3>{chatName}</h3>
        <p>{additionalInfo}</p>
      </div>
    </S.InformationWrapper>

    <div>actions</div>
  </S.Wrapper>
)
export default ChatHeader
