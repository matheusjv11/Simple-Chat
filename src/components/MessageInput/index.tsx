import * as S from './styles'
import { useRouter } from 'next/router'
import { useState } from 'react'
import IconButton from '../IconButton'
import { ChatService } from '@/services/ChatService'

const MessageInput = () => {
  const router = useRouter()
  const chatId = router.query.id as string

  const [message, setMessage] = useState('')

  const inputTitle = 'Type something'

  const inputMessage = (inputResponse: React.ChangeEvent<HTMLDivElement>) => {
    setMessage(inputResponse.target.innerText)
  }

  const sendMessage = () => {
    ChatService.insertMessageIntoChat(message, chatId)
    setMessage('')
  }

  return (
    <S.Wrapper>
      <S.EditableDiv
        role="textbox"
        contentEditable
        onInput={(e: React.ChangeEvent<HTMLDivElement>) => inputMessage(e)}
        suppressContentEditableWarning={true}
        title={inputTitle}
      ></S.EditableDiv>
      {!message && <S.PlaceHolder>{inputTitle}</S.PlaceHolder>}
      {!!message && (
        <S.SendWrapper>
          <IconButton icon={'send'} onClick={sendMessage} />
        </S.SendWrapper>
      )}
    </S.Wrapper>
  )
}

export default MessageInput
