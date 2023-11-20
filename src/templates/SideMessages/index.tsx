import { createSelector } from '@reduxjs/toolkit'
import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import { ChatService } from '@/services/ChatService'
import { RootState, store } from '@/store'
import DarkModeSwitch from '@/components/DarkModeSwitch'
import ChatWrapper from './components/ChatWrapper'
import { useSelector } from 'react-redux'

const SideMessages = () => {
  const chatsKey = useSelector((state: RootState) => state.chats.userChatsKey)
  const stateChats = (state: RootState) => state.chats.userChats
  const stateFilter = (state: RootState) => state.chats.chatFilter

  const sortAndFilterChats = createSelector(
    [stateChats, stateFilter],
    (chatObjects, filter) => {
      const filteredChats = ChatService.filterChats(
        Object.values(chatObjects),
        filter
      )

      return ChatService.orderChats(filteredChats)
    }
  )

  const chats = sortAndFilterChats(store.getState())

  return (
    <S.Wrapper>
      <S.SearchBox>
        <div>
          <h2>Chats</h2>
          <DarkModeSwitch />
        </div>
        <SearchInput />
      </S.SearchBox>
      <ChatWrapper chats={chats} key={chatsKey} />
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
