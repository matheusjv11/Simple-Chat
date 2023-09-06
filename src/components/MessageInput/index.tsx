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
    if (!inputResponse.target.innerText.includes('\n')) {
      setMessage(inputResponse.target.innerText)
    }
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
    if (!e) {
      return
    }

    const keyCode = e.keyCode || e.which
    const target = e.target || e.srcElement

    if (keyCode === 13 && !e?.shiftKey) {
      if (e?.preventDefault) {
        e.preventDefault()
        sendMessage()
      } else {
        e.returnValue = false
      }

      target.innerHTML = ''
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
        onKeyPress={handleEnterKeyPress}
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
