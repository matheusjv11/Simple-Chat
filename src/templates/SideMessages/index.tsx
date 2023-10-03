import { useSelector } from 'react-redux'
import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import { ChatService } from '@/services/ChatService'
import { RootState } from '@/store'
import DarkModeSwitch from '@/components/DarkModeSwitch'
import ChatWrapper from './components/ChatWrapper'

const SideMessages = () => {
  const chats = useSelector((state: RootState) => {
    const chatsValues = Object.values(state.chats.userChats)
    const filteredChats = ChatService.filterChats(
      chatsValues,
      state.chats.chatFilter
    )

    return ChatService.orderChats(filteredChats)
  })

  return (
    <S.Wrapper>
      <S.SearchBox>
        <div>
          <h2>Chats</h2>
          <DarkModeSwitch />
        </div>
        <SearchInput />
      </S.SearchBox>
      <ChatWrapper chats={chats} />
      <S.Author>
        <p>
          Made by{' '}
          <a href="https://matheusaf.com/" target="blank">
            Matheus Almeida
          </a>
        </p>
      </S.Author>
    </S.Wrapper>
  )
}

export default SideMessages

/* To enter a chat, we could do it by routing */
