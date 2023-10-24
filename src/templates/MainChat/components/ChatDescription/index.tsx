import * as S from './styles'
import { useContext } from 'react'
import { DescriptionOpenContext } from '@/templates/MainChat'

type ChatDescriptionProps = {
  coverPicture: React.ReactNode
}

const ChatDescription = ({ coverPicture }: ChatDescriptionProps) => {
  const { isDescriptionOpen } = useContext(DescriptionOpenContext)

  return (
    <S.Wrapper isOpen={isDescriptionOpen}>
      <S.DescriptionColumn>
        <S.CoverPicture>{coverPicture}</S.CoverPicture>
      </S.DescriptionColumn>
    </S.Wrapper>
  )
}

export default ChatDescription
