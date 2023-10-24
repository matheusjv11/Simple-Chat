import { useContext } from 'react'
import * as S from './styles'
import { DescriptionOpenContext } from '@/templates/MainChat'

type ChatHeaderProps = {
  children: React.ReactNode
  additionalInfo: string
  chatName: string
}

const ChatHeader = ({
  children,
  additionalInfo,
  chatName
}: ChatHeaderProps) => {
  const { updateContextValue } = useContext(DescriptionOpenContext)

  return (
    <S.Wrapper onClick={() => updateContextValue()}>
      <S.InformationWrapper>
        {children}
        <div>
          <h3>{chatName}</h3>
          <p>{additionalInfo}</p>
        </div>
      </S.InformationWrapper>
    </S.Wrapper>
  )
}
export default ChatHeader
