import { useContext, MouseEventHandler } from 'react'
import * as S from './styles'
import { DescriptionOpenContext } from '@/templates/MainChat'
import { MobileChatOpenContext } from '@/templates/Home'
import IconButton from '@/components/IconButton'

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
  const { updateContextValue: updateMobileChatContextValue } = useContext(
    MobileChatOpenContext
  )

  const mobileArrowClick = (
    e: MouseEventHandler<HTMLButtonElement> | undefined
  ) => {
    e?.stopPropagation()
    updateMobileChatContextValue()
  }

  return (
    <S.Wrapper onClick={() => updateContextValue()}>
      <S.InformationWrapper>
        <IconButton icon="leftArrow" onClick={mobileArrowClick} />
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
