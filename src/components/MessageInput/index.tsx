import * as S from './styles'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import IconButton from '../IconButton'
import { ChatService } from '@/services/ChatService'

const MessageInput = () => {
  const router = useRouter()

  const chatId = router.query.id as string

  const [message, setMessage] = useState('')

  const inputTitle = 'Type something'

  const inputAsHtml = useRef<HTMLDivElement | null>(null)

  const inputMessage = (inputResponse: React.ChangeEvent<HTMLDivElement>) => {
    setMessage(inputResponse.target.innerText)
  }

  const sendMessage = () => {
    if (message.length > 0) {
      ChatService.insertMessageIntoChat(message, chatId)
      setMessage('')
      restoreInputMessage()
    }
  }

  const restoreInputMessage = () => {
    if (inputAsHtml.current) {
      inputAsHtml.current.innerText = ''
    }
  }

  const handleEnterKeyPress = (
    e: KeyboardEvent<HTMLDivElement> | undefined
  ) => {
    if (e && e.keyCode === 13) {
      sendMessage()
    }
  }

  useEffect(() => {
    restoreInputMessage()
  }, [router])

  return (
    <S.Wrapper>
      <S.EditableDiv
        ref={inputAsHtml}
        role="textbox"
        contentEditable
        onInput={(e: React.ChangeEvent<HTMLDivElement>) => inputMessage(e)}
        suppressContentEditableWarning={true}
        title={inputTitle}
        onKeyDown={handleEnterKeyPress}
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
