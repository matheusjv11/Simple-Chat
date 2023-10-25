import * as S from './styles'
import { useContext } from 'react'
import { DescriptionOpenContext } from '@/templates/MainChat'
import IconButton from '@/components/IconButton'
import TextButton from '@/components/TextButton'

type ChatDescriptionProps = {
  coverPicture: React.ReactNode
  title: string
  subtitle: string
  pinned: boolean
  children?: React.ReactNode
}

const ChatDescription = ({
  coverPicture,
  title,
  subtitle,
  pinned,
  children
}: ChatDescriptionProps) => {
  const { isDescriptionOpen, updateContextValue } = useContext(
    DescriptionOpenContext
  )

  const closeDescription = () => {
    updateContextValue()
  }

  return (
    <S.Wrapper isOpen={isDescriptionOpen}>
      <S.DescriptionColumn>
        <IconButton icon={'close'} onClick={closeDescription} />
        <S.CoverPicture>{coverPicture}</S.CoverPicture>
        <S.FlexColumn>
          <S.InfoCard>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <S.ChatPinned>
              Is chat pinned? <strong>{pinned ? 'Yes' : 'No'}</strong>
            </S.ChatPinned>
          </S.InfoCard>
          {children}
          <S.Footer>
            <TextButton label="Delete Chat" color="danger" />
          </S.Footer>
        </S.FlexColumn>
      </S.DescriptionColumn>
    </S.Wrapper>
  )
}

export default ChatDescription
