import * as S from './styles'
import IconButton from '../IconButton'
import { useState } from 'react'

const SearchInput = () => {
  const [message, setMessage] = useState('')

  const inputTitle = 'Search someone'

  const inputMessage = (inputResponse: React.ChangeEvent<HTMLDivElement>) => {
    setMessage(inputResponse.target.innerText)
  }

  return (
    <S.Wrapper>
      <S.SendWrapper>
        <IconButton icon={'search'} />
      </S.SendWrapper>
      <S.EditableDiv
        role="textbox"
        contentEditable
        onInput={(e: React.ChangeEvent<HTMLDivElement>) => inputMessage(e)}
        suppressContentEditableWarning={true}
        title={inputTitle}
      ></S.EditableDiv>
      {!message && <S.PlaceHolder>{inputTitle}</S.PlaceHolder>}
    </S.Wrapper>
  )
}

export default SearchInput
