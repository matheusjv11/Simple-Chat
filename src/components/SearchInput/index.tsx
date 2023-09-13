import { RootState, store } from '@/store'
import { useSelector } from 'react-redux'
import { updateChatFilter } from '@/store/reducers/chatsReducer'

import * as S from './styles'
import IconButton from '../IconButton'

const SearchInput = () => {
  const message = useSelector((state: RootState) => {
    return state.chats.chatFilter
  })

  const inputTitle = 'Search for a chat'

  const inputMessage = (inputResponse: React.ChangeEvent<HTMLDivElement>) => {
    store.dispatch(updateChatFilter(inputResponse.target.innerText))
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
