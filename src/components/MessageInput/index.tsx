import * as S from './styles'
import { useState } from 'react'
import IconButton from '../IconButton'

const MessageInput = () => {
  const [message, setMessage] = useState('')

  const inputTitle = 'Type something'

  const inputMessage = (inputResponse: React.ChangeEvent<HTMLDivElement>) => {
    setMessage(inputResponse.target.innerText)
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
          <IconButton icon={'send'} />
        </S.SendWrapper>
      )}
    </S.Wrapper>
  )
}

export default MessageInput
