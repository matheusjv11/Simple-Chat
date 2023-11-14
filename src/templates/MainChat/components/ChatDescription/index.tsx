import * as S from './styles'
import { useContext } from 'react'
import { DescriptionOpenContext } from '@/templates/MainChat'
import IconButton from '@/components/IconButton'
import TextButton from '@/components/TextButton'
import { ChatService } from '@/services/ChatService'
import { useRouter } from 'next/router'
import { PinAngleFill as PinAngleFillIcon } from '@styled-icons/bootstrap/PinAngleFill'
import { PeopleFill as PeopleFillIcon } from '@styled-icons/bootstrap/PeopleFill'
import { PersonFill as PersonFillIcon } from '@styled-icons/bootstrap/PersonFill'
import { HouseDoorFill as HouseDoorFillIcon } from '@styled-icons/bootstrap/HouseDoorFill'
import { Info as InfoIcon } from '@styled-icons/evaicons-solid/Info'

type ChatDescriptionProps = {
  coverPicture: React.ReactNode
  chatId: string
  title: string
  subtitle: string
  pinned: boolean
  isGroup?: boolean
  children?: React.ReactNode
}

const ChatDescription = ({
  coverPicture,
  chatId,
  title,
  subtitle,
  pinned,
  isGroup,
  children
}: ChatDescriptionProps) => {
  const router = useRouter()

  const { isDescriptionOpen, updateContextValue } = useContext(
    DescriptionOpenContext
  )

  const closeDescription = () => {
    updateContextValue()
  }

  const deleteChat = () => {
    router.push('/')
    ChatService.removeChat(chatId, true)
  }

  return (
    <S.Wrapper isOpen={Number(isDescriptionOpen)}>
      <S.DescriptionColumn className="custom-scroll">
        <IconButton icon={'close'} onClick={closeDescription} />
        <S.CoverPicture>{coverPicture}</S.CoverPicture>
        <S.FlexColumn>
          <S.InfoCard>
            <S.TextAndIcon>
              {isGroup ? <PeopleFillIcon /> : <PersonFillIcon />}
              <p>{title}</p>
            </S.TextAndIcon>
            <S.TextAndIcon>
              {isGroup ? <InfoIcon /> : <HouseDoorFillIcon />}
              <p>{subtitle}</p>
            </S.TextAndIcon>
            <S.TextAndIcon>
              <PinAngleFillIcon />
              <p>
                Is chat pinned? <strong>{pinned ? 'Yes' : 'No'}</strong>
              </p>
            </S.TextAndIcon>
          </S.InfoCard>
          {children}
          <S.Footer>
            <TextButton
              label="Delete Chat"
              color="danger"
              onClick={deleteChat}
            />
          </S.Footer>
        </S.FlexColumn>
      </S.DescriptionColumn>
    </S.Wrapper>
  )
}

export default ChatDescription
